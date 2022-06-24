import { User } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { createContext, useContext } from "react";

type firebaseContextType = { app: FirebaseApp; user: User } | undefined;

const firebaseContext = createContext<firebaseContextType>(undefined);

const FirebaseProvider = firebaseContext.Provider;

const useFirebase = (): firebaseContextType => useContext(firebaseContext);

export { FirebaseProvider, useFirebase };
