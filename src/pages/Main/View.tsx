import ProfileCard from "./components/ProfileCard";
import Work from "./components/Work";
import Links from "components/Links";

import "./index.scss";
function View() {
  return (
    <div className="main-container">
      <ProfileCard />
      <Work />
      <Links />
    </div>
  );
}
export default View;
