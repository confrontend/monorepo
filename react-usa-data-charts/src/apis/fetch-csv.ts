import Papa, { ParseResult } from "papaparse";

async function readCsvFileByUrl(url: string) {
  const response: Response = await fetch(url);

  const reader = response?.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result?.value);

  return csv;
}

const fetchJSONDataFrom = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
};

export async function getCityZipCodes(url: string) {
  const repsone: ParseResult<string> = Papa.parse(
    await readCsvFileByUrl(url)
  );

  return repsone.data.map((d) => d[1]);
}

export async function getStateCapitalCities(url: string) {
  const repsone: ParseResult<string> = Papa.parse(
    await readCsvFileByUrl("data/state-city-zip.csv")
  );

  return repsone.data.map((d) => `${d[2]},${d[3]}`);
}

export async function getJsonFromFile(url: string): Promise<ParseResult<any>> {
  const json = await Papa.parse(await readCsvFileByUrl(url), {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      return results;
    },
  });

  return json;
}

export async function getFileDataByUrl(url: string) {
  const fileType = url.substring(url.lastIndexOf(".") + 1);
  let data = [];
  try {
    if (fileType === "json") {
      data = await fetchJSONDataFrom(url);
    } else if (fileType === "csv") {
      data = Papa.parse(await readCsvFileByUrl(url)).data;
    }
  } catch (error) {
    console.log(error);
    return ["error"];
  }

  return data;
}
