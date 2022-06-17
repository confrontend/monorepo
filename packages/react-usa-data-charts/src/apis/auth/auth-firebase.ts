import { FirebaseApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";

export const signInWithFirebase = async (
  e: FormEvent<HTMLFormElement>,
  app: FirebaseApp,
  email: string,
  password: string
) => {
  e.preventDefault();
  const auth = getAuth(app);
  return await signInWithEmailAndPassword(auth, email, password);
};
