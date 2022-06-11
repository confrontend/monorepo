import { ParseResult } from "papaparse";
import React, { useEffect, useState } from "react";
import { getLifeQualityData } from "../../apis/fetch-life-quality";
import MuiTable from "../../components/charts/table/mui-table";
import * as S from "./life-quality.styled";

export default function LifeQuality() {
  const [tableData, setTableData]: any = useState([[]]);

  useEffect(() => {
    getLifeQualityData("data/life-quality-city.csv").then(
      (results: ParseResult<any>) => {
        setTableData(results);
      }
    );
  }, []);

  return (
    <S.LifeQualityWrapper>
      {tableData.data && (
        <MuiTable rows={tableData.data} headers={tableData.headers} />
      )}

      {/* <GMap data={crimeMapData} options={options} /> */}
    </S.LifeQualityWrapper>
  );
}
