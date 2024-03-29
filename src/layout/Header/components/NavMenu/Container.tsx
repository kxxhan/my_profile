import React, { useState, useEffect } from "react";
import View from "./View";
import { GnbItem } from "utils/interfaces";

interface ContainerProps {
  isExpand: boolean;
  onClickChevron: () => void;
}
// interface MenuItem {
//   name: string;
//   path: string;
// }
function Container({
  isExpand,
  onClickChevron,
}: ContainerProps): React.ReactElement {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const isDevlopment: boolean = process.env.NODE_ENV === "development";
  const path: string = isDevlopment
    ? "http://localhost:3000/my_profile/"
    : "https://kxxhan.github.io/my_profile/";

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items: GnbItem[] = [
    {
      name: "INFO",
      path: "info",
    },
    {
      name: "PROJECTS",
      path: "projects",
    },
    {
      name: "SOURCE",
      path: "https://github.com/kxxhan/my_profile",
    },
  ];
  return (
    <View
      isExpand={isExpand}
      path={path}
      items={items}
      containerWidth={containerWidth}
      onClickChevron={onClickChevron}
    />
  );
}
export default Container;
