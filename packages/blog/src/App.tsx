import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./layout/layout";
import Blog from "./pages/blog";
import Resume from "./pages/resume";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<span>Page not found 404.</span>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
