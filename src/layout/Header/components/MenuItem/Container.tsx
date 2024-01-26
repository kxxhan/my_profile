import View from "./View";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface ContainerProps {
  name: string;
  path: string;
}

function Container({ name, path }: ContainerProps): React.ReactElement {
  const [isHovered, setHovered] = useState(false);

  const navigate = useNavigate();
  const onClick = () => {
    if (path === "https://github.com/kxxhan/my_profile") {
      window.location.href = path;
      return;
    }
    navigate(path);
  };

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };
  return (
    <View
      name={name}
      isHovered={isHovered}
      onClick={onClick}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}
export default Container;
