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
        {projectList.map((project, index) => (
          <ProjectItem
            date={project.date}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
export default View;
