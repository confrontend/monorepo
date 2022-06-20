import { ReactNode, MouseEvent } from "react";
import * as S from "./ui-button.styled";

type UiButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
};
/**
 * UI Button
 */
export default function UiButton({
  children,
  onClick,
  color,
  bgColor,
  hoverColor,
  hoverBgColor
}: UiButtonProps) {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
    >
      {children}
    </S.ButtonWrapper>
  );
}
