import { FirebaseApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { FormEvent, useEffect, useState } from "react";
import { signInWithFirebase } from "../../react-usa-data-charts/src/apis/auth/auth-firebase";

const useHandleAuth = (app: FirebaseApp | undefined): [User, boolean] => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getAuth(app)?.onAuthStateChanged(
      (userAuth: User | null) => {
        console.log(userAuth);

        if (userAuth) {
          setUser(userAuth);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

    return unsubscribe;
  }, [app]);

  return [user, isLoading];
};

const handleSignIn = (e: FormEvent<HTMLFormElement>, app: FirebaseApp) => {
  e.preventDefault();
  const elements: any = e.currentTarget.elements;

  signInWithFirebase(
    e,
    app,
    elements.username.value,
    elements.password.value
  ).catch((err) => {
    // fixme handle error properly
    alert(err);
  });
};

export { useHandleAuth, handleSignIn };
