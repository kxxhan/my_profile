import ProjectItem from "./components/ProjectItem";
import "./index.scss";

interface projectItem {
  date: string;
  thumbnail: string;
  href: string;
  title: string;
  description: string;
  techs: string[];
}
interface ViewProps {
  projectList: projectItem[];
}
function View({ projectList }: ViewProps) {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="pl-container">
        <ul>
          {projectList.map((project, index) => (
            <ProjectItem
              date={project.date}
              thumbnail={project.thumbnail}
              href={project.href}
              title={project.title}
              description={project.description}
              techs={project.techs}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default View;
