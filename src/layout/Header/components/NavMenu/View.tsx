import path from "path";
import MenuItem from "../MenuItem";
import "./index.scss";

interface MenuItem {
  name: string;
  path: string;
}
interface ViewProps {
  isExpand: boolean;
  path: string;
  items: MenuItem[];
  containerWidth: number;
  onClickChevron: () => void;
}
function View({
  isExpand,
  path,
  items,
  containerWidth,
  onClickChevron,
}: ViewProps): React.ReactElement {
  return (
    <div className="menu-container">
      {/* [TEMP]: href is required to rerplace after publishing */}
      <a href="https://naver.com">
        <img className="logo" src="logo.png" alt="Logo"></img>
      </a>
      {containerWidth > 680 && (
        <div className="menu-sub-container">
          {items.map((item, index) => (
            <MenuItem key={index} name={item.name} path={item.path} />
          ))}
        </div>
      )}
      {containerWidth <= 680 && (
        <>
          <img
            className="expand-btn"
            src={isExpand ? "icons/up.svg" : "icons/down.svg"}
            alt=""
            onClick={onClickChevron}
          />
          <div className="logo"></div>
        </>
      )}
    </div>
  );
}
export default View;
