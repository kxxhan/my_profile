// test
import View from "./View";

interface projectItem {
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  techs: string[];
}
function Container() {
  const projectList: projectItem[] = [
    {
      date: "JANUARY 2022",
      thumbnail: "thumbnails/redbrick.png",
      title: "REDBRICK 3D Editor",
      description:
        "Leading the project, I implemented various functions, optimized Web 3D Rendering, and developed a multi-play system. Redux was utilized to optimize user interaction through effective health management. Additionally, I contributed to diversifying and enhancing the user experience by performing tasks such as creating Gitbooks and managing Discord communities.",
      techs: ["React", "Redux", "three.js"],
    },
    {
      date: "2018-08-15",
      thumbnail: "not yet",
      title: "Title222",
      description: "Lorem Ipsum",
      techs: ["TypeScript", "React"],
    },
  ];
  return <View projectList={projectList} />;
}
export default Container;
