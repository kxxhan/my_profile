import React, { useState, useEffect } from "react";
import View from "./View";
import { GnbItem } from "utils/interfaces";

function Container() {
  const [isExpand, setIsExpand] = useState(false);
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

  const items: GnbItem[] = [
    {
      name: "INFO",
      path: "info",
    },
    {
      name: "PROJECTS",
      path: "projects",
    },
  ];
  const onClickChevron = (): void => {
    setIsExpand(!isExpand);
  };
  return (
    <View
      isExpand={isExpand}
      containerWidth={containerWidth}
      items={items}
      onClickChevron={onClickChevron}
    />
  );
}
export default Container;
