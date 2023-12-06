import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import Links from "components/Links";
// import Main from "pages/Main";
import Layout from "layout";

const Main = lazy(() => import("pages/Main"));
const Info = lazy(() => import("pages/Info"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Route>
    </Routes>

    // <div className="App">
    //   <Links />
    // </div>
  );
}

export default App;
