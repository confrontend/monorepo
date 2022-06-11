import axios, { AxiosResponse } from "axios";
import { HistoryWeatherType } from "../global/types";
import { getCityZipCodes, getFileDataByUrl } from "./fetch-csv";
import { mockWeatherData } from "./mocks/mock-weather";
import { weatherApiKey } from "./secrets";

const localStorageKey = "cached-weather-data";

/**
 *
 * @param mock Not in use. can be used to generate history data on given dates using visualcrossing.com
 * @returns
 */
export const getHistoricWeather = async () => {
  const data: HistoryWeatherType[] = await getFileDataByUrl(
    "data/weather-historic.json"
  );

  const mapped = data.map((item: HistoryWeatherType) => ({
    address: item.address,
    days: item.days,
    latitude: item.latitude,
    longitude: item.longitude,
    resolvedAddress: item.resolvedAddress,
  }));

  return mapped;
};

export const getCurrentWeather = async (mock = false) => {
  if (mock) {
    return mockWeatherData.map((mock) => mock.data);
  }

  const cachedData = await readExistingData();
  let useCache = false;
  let backendResponse = null;

  if (cachedData) {
    useCache = isDataUpToDate(cachedData[0].current.last_updated);
  }

  try {
    if (useCache) {
      console.log("Read from cached");

      return cachedData;
    } else {
      console.log("Live data");
      backendResponse = await callBackendCurrent();
      if (backendResponse) {
        localStorage.setItem(localStorageKey, JSON.stringify(backendResponse));
      }
      return backendResponse;
    }
  } catch (error) {
    console.log(`Something went wrong in getCurrentWeather: ${error}`);
  }
};

const readExistingData = async () => {
  const cached = localStorage.getItem(localStorageKey);
  const json = JSON.parse(cached || "{}");

  return json.map((j: any) => j.data);
};

/**
 * To reduce number of calls to backend, check the date of existing cached data.
 * @param lastUpdate Date of last cached data.
 * @returns True if cached data is not older than 6 days.
 */
const isDataUpToDate = (lastUpdate: string) => {
  const today = new Date() as any;
  const formattedLastUpdate = new Date(lastUpdate) as any;
  const diffDays = Math.floor(
    (today - formattedLastUpdate) / (1000 * 60 * 60 * 24)
  );
  return diffDays < 6;
};

const callBackendCurrent = async () => {
  try {
    const zipCodes = await getCityZipCodes("data/state-city-zip.csv");
    const urls = zipCodes
      .slice(1)
      .map(
        (zipCode) =>
          `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${zipCode}&aqi=no`
      );

    const response: AxiosResponse<any, any>[] = await Promise.all(
      urls.map(async (url) => await axios.get(url))
    );
    return response;
  } catch (error) {
    throw new Error(String(error));
  }
};

const callBackendHistoric = async () => {
  try {
    const zipCodes = await getCityZipCodes("data/state-city-zip.csv");
    const urls = zipCodes
      .slice(1)
      .map(
        (zipCode) =>
          `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${zipCode}&aqi=no`
      );

    const response: AxiosResponse<any, any>[] = await Promise.all(
      urls.map(async (url) => await axios.get(url))
    );
    return response;
  } catch (error) {
    throw new Error(String(error));
  }
};
