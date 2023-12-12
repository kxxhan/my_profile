import Leftbar from "./components/LeftBar";
import InfoArticle from "./components/InfoArticle";
import "./index.scss";

function View() {
  return (
    <div className="info-container">
      <Leftbar />
      <InfoArticle />
    </div>
  );
}
export default View;
