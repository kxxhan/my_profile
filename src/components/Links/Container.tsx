import View from "./View";
import { useState } from "react";

interface Link {
  url: string;
  icon: string;
  name: string;
}
function Container() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const items: Link[] = [
    {
      url: "https://github.com/kxxhan",
      icon: "icons/github.svg",
      name: "Github",
    },
    {
      url: "https://linkedin.com/in/jhin0646/",
      icon: "icons/linkedin.svg",
      name: "LinkedIn",
    },
    {
      url: "mailto:ofliberty@naver.com",
      icon: "icons/email.svg",
      name: "Email",
    },
    {
      url: "https://youtube.com/@KonHan-iw6ne?si=07lwVDKmJYx2wAQV",
      icon: "icons/youtube.svg",
      name: "Youtube",
    },
    {
      url: "https://www.instagram.com/ilongforthat/",
      icon: "icons/instagram.svg",
      name: "Instagram",
    },
  ];
  return (
    <View
      items={items}
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}
export default Container;
