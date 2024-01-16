// test
import View from "./View";

interface projectItem {
  date: string;
  thumbnail: string;
  href: string;
  title: string;
  description: string;
  techs: string[];
}
function Container() {
  const projectList: projectItem[] = [
    {
      date: "JANUARY 2022",
      thumbnail: "thumbnails/redbrick.png",
      href: "https://redbrick.land",
      title: "REDBRICK 3D Editor",
      description:
        "Leading the project, I implemented various functions, optimized Web 3D Rendering, and developed a multi-play system. Redux was utilized to optimize user interaction through effective health management. Additionally, I contributed to diversifying and enhancing the user experience by performing tasks such as creating Gitbooks and managing Discord communities.",
      techs: ["React", "Redux", "three.js"],
    },
    {
      date: "OCTOBER 2021",
      thumbnail: "thumbnails/coffee_station.png",
      href: "https://youtu.be/Kxdyelxyg3M",
      title: "Coffee Station",
      description:
        "It successfully launched in the Google Play Store using React Native. As a team lead, I led the project and played various roles from planning to deploying the Play Store to UCC production. This gave me hands-on experience in mobile application development.",
      techs: ["React Native", "Styled Component"],
    },
    {
      date: "JULY 2021",
      thumbnail: "thumbnails/better_mind.png",
      href: "https://youtu.be/DigJguN_I18",
      title: "Better Mind",
      description:
        "I played a key role in implementing the WebRTC functionality and took charge of the overall deployment throughout the project. My contributions ensured the successful integration of WebRTC features, and I led the deployment efforts to bring the project to fruition.",
      techs: ["OpenVidu", "AWS", "Docker", "NGINX"],
    },
    {
      date: "SEPTEMBER 2021",
      thumbnail: "thumbnails/rugettingit.gif",
      href: "https://youtu.be/_hLA9E83Cqk",
      title: "RUGettingIT",
      description:
        "In a project using Image Capturing and TTS AI, I participated as a team lead and front-end developer. Socket.io was effectively utilized to play the game for multiple users, and images to be used in the game were acquired through HTML Canvas.",
      techs: ["Vue", "Web Socket"],
    },
  ];
  return <View projectList={projectList} />;
}
export default Container;
