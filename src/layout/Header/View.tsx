import React from "react";
import NavMenu from "./components/NavMenu";
import MenuItem from "./components/MenuItem";
import "./index.scss";
import { GnbItem } from "utils/interfaces";

interface ViewProps {
  isExpand: boolean;
  containerWidth: number;
  items: GnbItem[];
  onClickChevron: () => void;
}
function View({
  isExpand,
  containerWidth,
  items,
  onClickChevron,
}: ViewProps): React.ReactElement {
  return (
    <div className="header-container">
      <div className="header-container-inside">
        {isExpand && containerWidth <= 680 && (
          <div className="menu-container">
            {items.map((item, index) => (
              <MenuItem key={index} name={item.name} path={item.path} />
            ))}
          </div>
        )}
        <NavMenu isExpand={isExpand} onClickChevron={onClickChevron} />
      </div>
    </div>
  );
}
export default View;
