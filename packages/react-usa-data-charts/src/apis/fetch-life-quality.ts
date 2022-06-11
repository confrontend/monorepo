import { iHeaderLifeQaulity as iHeaderLifeQuality } from "./../global/types";
// source: https://www.numbeo.com/quality-of-life/country_result.jsp?country=United+States
import { ParseResult } from "papaparse";
import { getJsonFromFile } from "./fetch-csv";

const toFloat = (item: any) => {
  return parseFloat(String(item));
};

export async function getLifeQualityData(url: string): Promise<any> {
  const data: Promise<{
    headers: string[] | undefined;
    data: iHeaderLifeQuality[];
  }> = getJsonFromFile(url).then((results: ParseResult<any>) => ({
    headers: results.meta.fields,
    data: results.data.map((d: iHeaderLifeQuality) => ({
      City: d.City,
      Quality_of_Life_Index: toFloat(d.Quality_of_Life_Index),
      Purchasing_Power_Index: toFloat(d.Purchasing_Power_Index),
      Safety_Index: toFloat(d.Safety_Index),
      Health_Care_Index: toFloat(d.Health_Care_Index),
      Cost_of_Living_Index: toFloat(d.Cost_of_Living_Index),
      Property_Price_to_Income_Ratio: toFloat(d.Property_Price_to_Income_Ratio),
      Traffic_Commute_Time_Index: toFloat(d.Traffic_Commute_Time_Index),
      Pollution_Index: toFloat(d.Pollution_Index),
      Climate_Index: toFloat(d.Climate_Index),
    })),
  }));

  return data;
}
