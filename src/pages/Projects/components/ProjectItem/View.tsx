import "./index.scss";

interface ViewProps {
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  techs: string[];
}
function View({ date, thumbnail, title, description, techs }: ViewProps) {
  return (
    <li>
      <h5>{date}</h5>
      <a href="https://redbrick.land/">
        <img decoding="async" src={thumbnail} width={250} height={140} />
      </a>
      <h3>{title}</h3>
      <p className="pjt-description">{description}</p>
      {techs.map((tech, index) => (
        // TODO: Tech Component will be adde
        <div>{tech}</div>
      ))}
    </li>
  );
}
export default View;
