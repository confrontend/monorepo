import { NewsTeaser } from "./types";
import { newsApiKey } from "../globals/secrets";
import axios from "axios";
import { Category } from "../globals/enums";
const url = "https://newsapi.org/v2/top-headlines";

/**
 * @param cacheUrl Path to locally cached data. Currently path to file in public folder.  
 * @param useCache Should locally cached data or not
 * @param keyword A search keyword used to query the api
 * @param category e.g. technology, business, ...
 * @returns json data object from api response, containing an array of Teasers.
 */
export const fetchTopNews = async (
  cacheUrl = "",
  useCache = false,
  keyword: string,
  category: Category
): Promise<{
  articles: NewsTeaser[];
  status: string;
  totalResults: number;
}> => {
  if (useCache) {
    const cacheRes = await axios.get(cacheUrl);
    return cacheRes?.data;
  }

  const res = await axios.get(url, {
    headers: {
      Authorization: newsApiKey,
    },
    params: {
      q: keyword,
      category,
      language: "en",
      country: "us",
    },
  });
  return res?.data;
};
