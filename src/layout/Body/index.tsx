import "./index.scss";

interface BodyProps {
  children: React.ReactElement;
}

function View({ children }: BodyProps): React.ReactElement {
  return <div className="body-container">{children}</div>;
}

export default View;
