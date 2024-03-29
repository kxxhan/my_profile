import MenuItem from "../MenuItem";
import "./index.scss";
import { GnbItem } from "utils/interfaces";

interface ViewProps {
  isExpand: boolean;
  path: string;
  items: GnbItem[];
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
      <a href={path}>
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
          <div className="dummy"></div>
        </>
      )}
    </div>
  );
}
export default View;
