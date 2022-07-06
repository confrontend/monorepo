import { useEffect, useState } from "react";
import { Category } from "../globals/enums";
import { fetchTopNews } from "../api/fetch-news";
import { NewsTeaser } from "../api/types";
import { mapTeaserObject, populateDefaultTeasers } from "../api/utiles";
import Teaser from "../components/teaser/teaser";
import { getMostRead } from "../analytics/most-read";

const cacheUrl = "data/technology.json";

/**
 * Page Technology
 */
export default function Home(): JSX.Element {
  document.title = Category.home;
  try {
    getMostRead();
  } catch (error) {}

  const [teasers, setTeaser] = useState<NewsTeaser[]>(populateDefaultTeasers());

  useEffect(() => {
    fetchTopNews(cacheUrl, true, "", Category.home)
      .then((data) => {
        const { articles } = data;
        setTeaser(mapTeaserObject(articles));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Top 3 Most Read Articles</h1>
      <h2>Place 1</h2>
      <Teaser
        imageUrl={""}
        title={""}
        author={""}
        description={""}
        url={undefined}
        publishedAt={undefined}
      ></Teaser>
      <h2>Place 2</h2>
      <Teaser
        imageUrl={""}
        title={""}
        author={""}
        description={""}
        url={undefined}
        publishedAt={undefined}
      ></Teaser>
      <h2>Place 3</h2>
      <Teaser
        imageUrl={""}
        title={""}
        author={""}
        description={""}
        url={undefined}
        publishedAt={undefined}
      ></Teaser>
    </>
  );
}
