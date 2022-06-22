import { SignIn as UISignIn } from "@confrontend/ui-components";
import { FormEvent } from "react";

export default function SignInPage({
  signInFn,
}: {
  signInFn: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return <UISignIn signInFn={signInFn} />;
}
