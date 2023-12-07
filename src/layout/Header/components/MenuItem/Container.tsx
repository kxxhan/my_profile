import View from "./View";

interface ContainerProps {
  name: string;
}

function Container({ name }: ContainerProps): React.ReactElement {
  return <View name={name} />;
}
export default Container;
