import View from "./View";

interface ContainerProps {
  tech: string;
}
function Container({ tech }: ContainerProps) {
  return <View tech={tech} />;
}
export default Container;
