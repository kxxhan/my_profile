import LinkItem from "components/LinkItem";
import "./index.scss";

interface Link {
  url: string;
  icon: string;
  name: string;
}

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
      <h2
        className={`nickname ${
          isHovered ? "secondary-color" : "primary-color"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        @hxxkon
      </h2>
      <img src="profile.jpeg" alt="" className="profile_img" />
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
