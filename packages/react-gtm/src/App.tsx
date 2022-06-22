import React, { FormEvent } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";
import * as S from './App.styled'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Science from "./pages/science";
import Technology from "./pages/technology";
import Business from "./pages/business";

import Layout from "./layout/layout";
import { MenuItem } from "./globals/enums";
import NoPage from "./pages/no-page";

import { firebaseConfig } from "./firebase/firebase-config";
import {
  FirebaseProvider,
  handleSignIn,
  useHandleAuth,
} from "@confrontend/shared";
import SignInPage from "./pages/signin-page";

function App() {
  const app = initializeApp(firebaseConfig);
  const [user, isLoading] = useHandleAuth(app);
  const signInFn = (e: FormEvent<HTMLFormElement>) => handleSignIn(e, app);

  return (
    <FirebaseProvider value={app}>
      {isLoading ? (
        //fixme: Styling 
        <div></div>
      ) : !user ? (
        <S.SignInWrapper>
          <SignInPage signInFn={signInFn} />
        </S.SignInWrapper>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout app={app} />}>
              <Route path="" element={<Technology />} />
              <Route path={MenuItem.business} element={<Business />} />
              <Route path={MenuItem.science} element={<Science />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </FirebaseProvider>
  );
}

export default App;
