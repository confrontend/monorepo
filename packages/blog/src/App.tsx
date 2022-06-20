import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.styled.ts";
import Layout from "./layout/layout";

import { GlobalStyle } from "./App.styled";
import { NonIdealState } from "@confrontend/ui-components";
import HelmetMeta from "./components/seo/helmet-meta";

// Import the functions you need from the SDKs you need
const Blog = lazy(() => import("./pages/blog"));
const Resume = lazy(() => import("./pages/resume/resume"));
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  return (
    <div className="App">
      <HelmetMeta />
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
