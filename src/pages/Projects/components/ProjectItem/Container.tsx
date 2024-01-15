import View from "./View";

interface ContainerProps {
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  techs: string[];
}

function Container({
  date,
  thumbnail,
  title,
  description,
  techs,
}: ContainerProps) {
  return (
    <View
      date={date}
      thumbnail={thumbnail}
      title={title}
      description={description}
      techs={techs}
    />
  );
}
export default Container;
