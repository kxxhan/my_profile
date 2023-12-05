import View from "./View";

interface ContainerProps {
  url: string;
  icon: string;
  name: string;
}
function Container({ url, icon, name }: ContainerProps): React.ReactElement {
  return <View url={url} icon={icon} name={name} />;
}

// function Container: React.FC<ContainerProps> ({link}) {
//   return <View />;
// }
export default Container;
