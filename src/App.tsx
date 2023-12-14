import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "layout";
import Main from "pages/Main";
import Info from "pages/Info";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
