import { useEffect, useState } from "react";
import { Category } from "../globals/enums";
import { fetchTopNews } from "../api/fetch-news";
import { NewsTeaser } from "../api/types";
import { mapTeaserObject, populateDefaultTeasers } from "../api/utiles";
import Teaser from "../components/teaser/teaser";

const cacheUrl = "data/technology.json";

/**
 * Page Technology
 */
export default function Technology(): JSX.Element {
  document.title = Category.technology;

  const [teasers, setTeaser] = useState<NewsTeaser[]>(populateDefaultTeasers());

  useEffect(() => {
    fetchTopNews(cacheUrl, true, "", Category.technology)
      .then((data) => {
        const { articles } = data;
        setTeaser(mapTeaserObject(articles));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {teasers.map((teaser) => (
        <Teaser
          key={teaser.id}
          imageUrl={teaser.urlToImage}
          title={teaser.title}
          author={teaser.author}
          description={teaser.description}
          url={teaser.url}
          publishedAt={teaser.publishedAt}
        ></Teaser>
      ))}
    </>
  );
}
