import { ReactNode, MouseEvent } from "react";
import * as S from "./ui-button.styled";

type UiButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export default function UiButton({ children, onClick }: UiButtonProps) {
  return <S.ButtonWrapper onClick={onClick}>{children}</S.ButtonWrapper>;
}
