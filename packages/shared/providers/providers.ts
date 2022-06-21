import { FirebaseApp } from "firebase/app";
import { createContext, useContext } from "react";

type firebaseContextType = FirebaseApp | undefined;

const firebaseContext = createContext<firebaseContextType>(undefined);

const FirebaseProvider = firebaseContext.Provider;

const useFirebaseApp = (): firebaseContextType => useContext(firebaseContext);

export { FirebaseProvider, useFirebaseApp };
