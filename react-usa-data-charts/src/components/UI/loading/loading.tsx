import * as S from "./loading.styled";

export default function Loading({
  loading,
  failed,
}: {
  loading: boolean;
  failed: boolean;
}) {
  return (
    <S.LoadingWrapper>
      {loading && <div>Loading</div>}
      {failed && <div>Failed</div>}
    </S.LoadingWrapper>
  );
}
