import { ReactNode } from "react";
import * as S from "./ui-section.styled";

export default function Section({ children }: { children: ReactNode }) {
  return <S.SectionWrapper>{children}</S.SectionWrapper>;
}
