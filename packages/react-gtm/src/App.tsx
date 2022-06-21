import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Science from "./pages/science";
import Technology from "./pages/technology";
import Business from "./pages/business";

import Layout from "./layout/layout";
import { MenuItem } from "./globals/enums";
import NoPage from "./pages/no-page";

function App() {
  console.log('Hamed');
  
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
