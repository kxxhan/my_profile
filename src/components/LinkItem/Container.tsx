import React, { useState, useEffect } from "react";
import View from "./View";

interface ContainerProps {
  url: string;
  icon: string;
  name: string;
}

function Container({ url, icon, name }: ContainerProps): React.ReactElement {
  const [isHovered, setHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <View
      url={url}
      icon={icon}
      name={name}
      containerWidth={containerWidth}
      isHovered={isHovered}
      handleMousewEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}

// onClickLinkItem 구현 필요

// function Container: React.FC<ContainerProps> ({link}) {
//   return <View />;
// }
export default Container;
