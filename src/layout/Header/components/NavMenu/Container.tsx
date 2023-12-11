import React, { useState, useEffect } from "react";
import View from "./View";

interface ContainerProps {
  isExpand: boolean;
  onClickChevron: () => void;
}
interface MenuItem {
  name: string;
  path: string;
}
function Container({
  isExpand,
  onClickChevron,
}: ContainerProps): React.ReactElement {
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

  const items: MenuItem[] = [
    {
      name: "INFO",
      path: "info",
    },
    {
      name: "PROJECTS",
      path: "projects",
    },
  ];
  return (
    <View
      isExpand={isExpand}
      items={items}
      containerWidth={containerWidth}
      onClickChevron={onClickChevron}
    />
  );
}
export default Container;
