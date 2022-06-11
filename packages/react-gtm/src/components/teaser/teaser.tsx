import { handleDate } from "../../api/utiles";
import * as S from "./teaser.styled";

type TeaserProps = {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  url: string | undefined;
  publishedAt: string | undefined;
};
/**
 * Teaser component acts as a Preview to news articles.
 * Multiple instances of this component is populated on each page.
 * Each Teaser links to an external article on the source website.
 * @returns JSX Element of the Teaser component
 */
export default function Teaser({
  imageUrl = "",
  title = "",
  author = "",
  description = "",
  url = "",
  publishedAt = "",
}: TeaserProps): JSX.Element {
  const formattedDate = handleDate(publishedAt);

  return (
    <S.TeaserWrapper>
      <S.ATag href={url} target="_blank" rel="noreferrer">
        <S.ImgWrapper>
          {imageUrl && <S.ImgElement src={imageUrl} alt={title} />}
        </S.ImgWrapper>
        <S.TitleH3>{title}</S.TitleH3>
      </S.ATag>

      <S.AuthorDate>
        <span>{author}</span>
        <S.Date>{formattedDate}</S.Date>
      </S.AuthorDate>

      <S.Description>{description}</S.Description>
    </S.TeaserWrapper>
  );
}
