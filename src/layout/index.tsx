import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./index.scss";

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Body>
        <Outlet />
        {/* Outlet에 전달되는 Route */}
        {/* <Route path="/" element={<Main />}></Route>
        <Route path="/info" element={<Info />}></Route> */}
      </Body>
      <Footer />
    </div>
  );
}

export default Layout;
