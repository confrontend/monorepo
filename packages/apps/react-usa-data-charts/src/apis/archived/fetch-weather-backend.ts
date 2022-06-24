import axios from "axios";
import { getStateCapitalCities } from "../fetch-csv";

/**
 *
 * @param mock Not in use. can be used to generate history data on given dates using visualcrossing.com
 * @returns
 */
export const fetchBackendHistoricWeather = async (mock = false) => {
  const cities = await getStateCapitalCities("");

  const dates = ["2021-01-15", "2021-04-15", "2021-07-15", "2021-10-15"];

  const urls: any[] = [];

  dates.forEach((date) => {
    const noDates = cities
      .slice(1)
      .map(
        (county: string | number | boolean) =>
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            county
          )}/${date}?unitGroup=metric&include=days&key=VM6ZMTTEGZ84X5UMWXX9DPGBU&contentType=json`
      );

    urls.push(noDates);
  });

  const finals = loop(urls);
  console.log(finals);
};

async function loop(urls: any[]) {
  const finals: any[] = [];

  for (const url of urls.flat()) {
    console.log(url);

    try {
      const one = await axios.get(url);

      finals.push(one.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(finals);
  return finals;
}
