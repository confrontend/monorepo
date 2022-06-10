import { ParseResult } from "papaparse";
import { useEffect, useState } from "react";
import { getJsonFromFile } from "../../apis/fetch-csv";
import { GMap } from "../../components/charts/map/g-map";
import MuiTable from "../../components/charts/table/mui-table";
import Loading from "../../components/UI/loading/loading";
import { useCacheContext } from "../../providers/cache.provider";
import { taxColorRange } from "../../styles/colors";
import * as S from "./tax.styled";

type TaxData = {
  table: {
    headers: any;
    data: any;
  };
  map: any;
};

export default function Tax() {
  const { cachedData, setCachedData } = useCacheContext();

  const [taxData, setTaxData] = useState<TaxData>({
    table: {
      headers: [],
      data: [],
    },
    map: [["State", "Tax"]].concat([["test", "0"]]),
  });

  const [loading, setLoading] = useState({ loading: true, fail: false });

  const options = {
    region: "US",
    colorAxis: { colors: taxColorRange },
    datalessRegionColor: "#ccc",
    defaultColor: "#f5f5f5",
    displayMode: "regions",
    resolution: "provinces",
  };

  useEffect(() => {
    // Read from context if cache hits
    if (cachedData?.taxData) {
      setTaxData(cachedData.taxData);
      setLoading({ loading: false, fail: false });
    }
    // Fetch live data if cache misses
    else {
      //  [["State", "Tax"]].concat(found as any) as any;
      getJsonFromFile("data/tax.csv")
        .then((results: ParseResult<string>) => {
          const mapData: any = [["State", "Tax"]].concat(
            results.data.map((d: any) => [d.State, parseFloat(d.Total)])
          );

          const data = {
            table: {
              headers: results.meta.fields,
              data: results.data,
            },
            map: mapData,
          };

          setTaxData(data);
          setCachedData({ taxData: data });
          setLoading({ loading: false, fail: false });
        })
        .catch(() => setLoading({ loading: false, fail: true }));
    }
  }, []);

  return (
    <S.TaxWrapper>
      {(loading.loading || loading.fail) && (
        <Loading loading={loading.loading} failed={loading.fail}></Loading>
      )}
      {!loading.loading && !loading.fail && (
        <>
          <GMap data={taxData.map} options={options} />
          {taxData?.table?.data && (
            <MuiTable
              rows={taxData.table.data}
              headers={taxData.table.headers}
            />
          )}
        </>
      )}
    </S.TaxWrapper>
  );
}
