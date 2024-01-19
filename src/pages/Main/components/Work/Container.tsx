import { useState } from "react";
import View from "./View";

function Container() {
  const currentHost: string = window.location.host;
  let path: string;
  if (currentHost === "localhost:3000") {
    path = "http://localhost:3000/my_profile/info";
  } else {
    path = "https://kxxhan.github.io/my_profile/info";
  }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <View
      path={path}
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}
export default Container;
