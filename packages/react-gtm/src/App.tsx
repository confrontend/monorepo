import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Science from "./pages/science";
import Technology from "./pages/technology";
import Business from "./pages/business";
import { firebaseConfig } from "./firebase/firebase-config";

import * as S from "./App.styled";
import Layout from "./layout/layout";
import { MenuItem } from "./globals/enums";
import NoPage from "./pages/no-page";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Technology />} />
            <Route path={MenuItem.business} element={<Business />} />
            <Route path={MenuItem.science} element={<Science />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
