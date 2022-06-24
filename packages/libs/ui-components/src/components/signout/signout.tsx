import { FormEvent } from "react";
import UiButton from "../button/ui-button";

export default function SignOut({
  signOutFn,
}: {
  signOutFn: (e: FormEvent<HTMLButtonElement>) => void;
}) {
  return (
    <UiButton
      onClick={signOutFn}
      hoverColor="#000"
      hoverBgColor="#ccc"
      color="#000"
      bgColor="#fff"
    >
      Sign out
    </UiButton>
  );
}
