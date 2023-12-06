import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Body>
        <Outlet />
        {/* Outlet에 전달되는 Route */}
        {/* <Route path="/" element={<Main />}></Route>
        <Route path="/info" element={<Info />}></Route> */}
      </Body>
    </>
  );
}

export default Layout;
