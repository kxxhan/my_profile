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
        <h1>Projects</h1>
      </div>
    </div>
  );
}
export default View;
