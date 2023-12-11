import View from "./View";

interface NavItem {
  name: string;
  path: string;
}
function Container(): React.ReactElement {
  const items: NavItem[] = [
    {
      name: "INFO",
      path: "info",
    },
    {
      name: "PROJECTS",
      path: "projects",
    },
  ];
  return <View items={items} />;
}
export default Container;
