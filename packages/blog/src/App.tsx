import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.styled.ts";
import Layout from "./layout/layout";

import { GlobalStyle } from "./App.styled";
import { NonIdealState } from "@confrontend/ui-components";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const Blog = lazy(() => import("./pages/blog"));
const Resume = lazy(() => import("./pages/resume/resume"));
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL1K7gf3aZaJ7SukXNEYel5o2MmmOO7bY",
  authDomain: "blog-confrontend.firebaseapp.com",
  projectId: "blog-confrontend",
  storageBucket: "blog-confrontend.appspot.com",
  messagingSenderId: "378830255343",
  appId: "1:378830255343:web:355f7b439686a3ce77171a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<NonIdealState></NonIdealState>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<NonIdealState></NonIdealState>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<NonIdealState></NonIdealState>}>
                  <Resume />
                </Suspense>
              }
            />
            <Route path="*" element={<span>Page not found 404.</span>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
