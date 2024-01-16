import "./index.scss";

interface ViewProps {
  tech: string;
}
function View({ tech }: ViewProps) {
  return <li className="tech-stack">{tech}</li>;
}
export default View;
