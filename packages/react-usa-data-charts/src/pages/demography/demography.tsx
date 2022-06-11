import React, { useEffect, useState } from "react";
import { getFileDataByUrl } from "../../apis/fetch-csv";

import Section from "../../components/UI/section/ui-section";
import { safetyColorRange } from "../../styles/colors";

export default function Demography() {
  const [populationMapData, setPopulationMapData]: any = useState([[]]);

  useEffect(() => {
    getFileDataByUrl("data/city-pop-zip.csv").then((data: any[]) => {
      const res = data.map((d) => `${d[1]}, ${d[2]}`);
      console.log(res);
    });

    // https://pe.usps.com/archive/html/dmmarchive20050106/print/L002.htm
    // getFileDataByUrl("data/city-3-digit.json").then((data: any[]) => {
    //   const codes = data.map((r) => r[0]);
    //   const mapTest = codes.map((c) => [c, Math.random()]);
    //   setPopulationMapData([["code", "value"]].concat(mapTest));
    // });
  }, []);

  const options = {
    region: "US",
    colorAxis: { colors: safetyColorRange },
    datalessRegionColor: "#ccc",
    defaultColor: "#f5f5f5",
    // displayMode: "regions",
    resolution: "metros",
  };
  // return <GMap data={populationMapData} options={options} />;
  return (
    <Section>
      <h1> 🚧 Under Construction ...</h1>
    </Section>
  );
}
