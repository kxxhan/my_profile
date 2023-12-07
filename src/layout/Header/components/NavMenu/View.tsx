import NavItem from "../MenuItem";
import "./index.scss";

interface ViewProps {
  // items: Array<string>;
  items: string[];
}
function View({ items }: ViewProps): React.ReactElement {
  return (
    <div className="menu-container">
      {/* NavItem의 요구사항
      1. 라우팅
      2. String을 입력받아 표시할수 있어야 한다.
      */}
      {items.map((item, index) => (
        <NavItem key={index} name={item} />
      ))}
    </div>
  );
}
export default View;
