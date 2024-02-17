import LinkItem from "components/LinkItem";
import "./index.scss";
import { Link } from "utils/interfaces";

interface ViewProps {
  items: Link[];
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

function View({
  items,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}: ViewProps): React.ReactElement {
  return (
    <div className="link-container">
      <div className="link-label">
        <h3 className="contacts">Contacts</h3>
      </div>
      <div className="links">
        {items.map((item, index) => (
          <LinkItem
            key={index}
            url={item.url}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
export default View;
