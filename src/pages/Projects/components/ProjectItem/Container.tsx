import View from "./View";

interface ContainerProps {
  date: string;
  thumbnail: string;
  href: string;
  title: string;
  description: string;
  techs: string[];
}

function Container({
  date,
  thumbnail,
  href,
  title,
  description,
  techs,
}: ContainerProps) {
  return (
    <View
      date={date}
      thumbnail={thumbnail}
      href={href}
      title={title}
      description={description}
      techs={techs}
    />
  );
}
export default Container;
