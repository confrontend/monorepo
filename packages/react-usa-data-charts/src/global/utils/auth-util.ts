import { FirebaseApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";

export const useHandleAuth = (app: FirebaseApp): [User, boolean] => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getAuth(app)?.onAuthStateChanged(
      (userAuth: User | null) => {
        console.log(userAuth);

        if (userAuth) {
          console.log(userAuth);
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
