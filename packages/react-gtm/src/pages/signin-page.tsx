import { SignIn as UISignIn } from "@confrontend/ui-components";
import { FormEvent } from "react";

export default function SignInPage({
  signInFn,
}: {
  signInFn: (e: FormEvent<HTMLFormElement>) => void;
}) {
  document.title = "Sign In";
  return <UISignIn signInFn={signInFn} />;
}
