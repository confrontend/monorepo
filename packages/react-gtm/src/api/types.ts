/**
 * Type of Teaser Object
 */
export type NewsTeaser = {
  id: string;
  urlToImage: string;
  title: string;
  author: string;
  description: string;
  url: string;
  content?: string;
  publishedAt?: string;
  source?: {
    id: string;
    name: string;
  };
};
