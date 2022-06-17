import { FormEvent } from "react";

export default function SignOut({
  signOutFn,
}: {
  signOutFn: (e: FormEvent<HTMLButtonElement>) => void;
}) {
  return <button onClick={signOutFn}>Sign out</button>;
}
