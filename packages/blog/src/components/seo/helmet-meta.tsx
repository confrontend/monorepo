import { Helmet } from "react-helmet";

export default function HelmetMeta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hamed Fatehi Tech Blog</title>
      <meta
        name="description"
        content="Tech dairy of a life-long developer."
      />
    </Helmet>
  );
}
