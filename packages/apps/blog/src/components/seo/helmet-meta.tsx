import { Helmet } from "react-helmet";

export default function HelmetMeta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hamed Fatehi Personal Blog</title>
      <meta
        name="description"
        content="Experienced Frontend Developer with a demonstrated history of working in the computer software industry. Skilled in and passionate about developing enterprise grade web applications based on best practices using Javascript, Typescript, AngularJS and Agile Methodologies. Strong engineering professional with a Master's degree focused in Information Technology from University of Stuttgart."
      />
    </Helmet>
  );
}
