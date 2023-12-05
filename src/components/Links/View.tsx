import LinkItem from "components/LinkItem";

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
    <div>
      {items.map((item, index) => (
        <LinkItem
          key={index}
          url={item.url}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </div>
  );
}
export default View;
