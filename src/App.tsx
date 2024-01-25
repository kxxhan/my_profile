import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layout";
import Main from "pages/Main";
import Info from "pages/Info";
import Project from "pages/Projects";

function App() {
  return (
    <BrowserRouter basename="/my_profile">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
