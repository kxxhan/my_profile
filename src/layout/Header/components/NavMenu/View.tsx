import NavItem from "../MenuItem";
import "./index.scss";

interface NavItem {
  name: string;
  path: string;
}
interface ViewProps {
  // items: Array<string>;
  items: NavItem[];
}
function View({ items }: ViewProps): React.ReactElement {
  return (
    <div className="menu-container">
      <img className="logo" src="logo2.png" alt=""></img>
      <div className="menu-sub-container">
        {items.map((item, index) => (
          <NavItem key={index} name={item.name} path={item.path} />
        ))}
      </div>
    </div>
  );
}
export default View;
