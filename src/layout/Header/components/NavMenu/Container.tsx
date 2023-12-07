import View from "./View";

// interface NavItems {
//   name: string;
// }
function Container(): React.ReactElement {
  const items: string[] = ["INFO", "PROJECTS"];
  return <View items={items} />;
}
export default Container;
