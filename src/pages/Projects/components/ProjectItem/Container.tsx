import View from "./View";

interface ContainerProps {
  date: string;
  title: string;
  description: string;
}

function Container({ date, title, description }: ContainerProps) {
  return <View date={date} title={title} description={description} />;
}
export default Container;
