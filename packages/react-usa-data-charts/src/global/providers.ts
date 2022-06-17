import { FirebaseApp } from "firebase/app";
import { createContext, useContext } from "react";

export type firebaseContextType = FirebaseApp | undefined;

const firebaseContext = createContext<firebaseContextType>(undefined);

export const FirebaseProvider = firebaseContext.Provider;

export const useFirebaseApp = (): firebaseContextType =>
  useContext(firebaseContext);
