import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layout";
import Main from "pages/Main";
import Info from "pages/Info";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
