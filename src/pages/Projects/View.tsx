import ProjectItem from "./components/ProjectItem";

interface projectItem {
  date: string;
  title: string;
  description: string;
  // TEMP
  techs: string[];
}
interface ViewProps {
  projectList: projectItem[];
}
function View({ projectList }: ViewProps) {
  return (
    <div className="container">
      <div>
        {projectList.map((project, index) => {
          <ProjectItem />;
        })}
      </div>
    </div>
  );
}
export default View;
