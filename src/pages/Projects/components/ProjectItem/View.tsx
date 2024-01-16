import TechStack from "../TechStack";
import "./index.scss";

interface ViewProps {
  date: string;
  thumbnail: string;
  href: string;
  title: string;
  description: string;
  techs: string[];
}
function View({ date, thumbnail, href, title, description, techs }: ViewProps) {
  return (
    <li>
      <h5>{date}</h5>
      <a href={href}>
        <img decoding="async" src={thumbnail} width={250} height={140} />
      </a>
      <h3>{title}</h3>
      <p className="pjt-description">{description}</p>
      <ul className="tech-list">
        {techs.map((tech, index) => (
          // TODO: Tech Component will be adde
          <TechStack tech={tech} />
        ))}
      </ul>
    </li>
  );
}
export default View;
