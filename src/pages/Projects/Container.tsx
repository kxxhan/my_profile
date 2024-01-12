// test
import View from "./View";

interface projectItem {
  date: string;
  title: string;
  description: string;
  // TEMP
  techs: string[];
}
function Container() {
  const projectList: projectItem[] = [
    {
      date: "2018-01-05",
      title: "Title",
      description: "Lorem Ipsum",
      techs: ["JavaScript", "WebGL", "React"],
    },
    {
      date: "2018-08-15",
      title: "Title222",
      description: "Lorem Ipsum",
      techs: ["TypeScript", "React"],
    },
  ];
  return <View projectList={projectList} />;
}
export default Container;
