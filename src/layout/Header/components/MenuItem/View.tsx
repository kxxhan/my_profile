import "./index.scss";

interface ViewProps {
  name: string;
  isHovered: boolean;
  onClick: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
function View({
  name,
  isHovered,
  onClick,
  handleMouseEnter,
  handleMouseLeave,
}: ViewProps): React.ReactElement {
  return (
    <div
      className={`menu-item ${isHovered ? "hovered" : "non-hovered"}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
    </div>
  );
}
export default View;
