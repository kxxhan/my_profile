import LinkItem from "components/LinkItem";
import "./index.scss";

interface Link {
  url: string;
  icon: string;
  name: string;
}

interface ViewProps {
  items: Link[];
}

function View({ items }: ViewProps): React.ReactElement {
  return (
    <div className="container">
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
