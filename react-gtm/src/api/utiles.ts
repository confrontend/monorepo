import { NewsTeaser } from "./types";

const teaserObject = {
  id: "",
  urlToImage: "",
  author: "",
  title: "",
  description: "",
  url: "",
  publishedAt: "",
};

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

/**
 * Destructuring of api data into the application data model.
 * @param articles raw data from api
 * @returns
 */
export const mapTeaserObject = (articles: NewsTeaser[]): NewsTeaser[] =>
  articles.map((article: NewsTeaser) => ({
    id: article.description,
    urlToImage: article.urlToImage,
    title: article.title,
    author: article.author,
    description: article.description,
    url: article.url,
    publishedAt: article.publishedAt,
  }));

/**
 * Populates Teaser placeholders to prevent layout shifting.
 * @returns an array of empty Teasers
 */
export const populateDefaultTeasers = (): NewsTeaser[] => {
  const def = [];

  for (let i = 0; i < 20; i++) {
    def.push({ ...teaserObject, id: String(i) });
  }

  return def;
};

/**
 * Generates a valid date string to be shown in a Teaser
 * @param publishedAt date string to be validated
 * @returns validated date string
 */
export const handleDate = (publishedAt: string): string => {
  if (!publishedAt) {
    return "";
  }

  const date = new Date(publishedAt);

  return `Published on: ${date.toLocaleDateString("en-US", options)}`;
};
