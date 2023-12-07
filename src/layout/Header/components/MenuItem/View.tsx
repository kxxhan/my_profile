import "./index.scss";

interface ViewProps {
  name: string;
}
function View({ name }: ViewProps): React.ReactElement {
  return <div className="menu-item">{name}</div>;
}
export default View;
