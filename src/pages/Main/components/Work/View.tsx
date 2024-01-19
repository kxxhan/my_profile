import "./index.scss";
interface ViewProps {
  path: string;
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
function View({
  path,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}: ViewProps) {
  return (
    <div className="work-container">
      <h3 className="work">Work</h3>
      <p className="work-phrase">
        Jhin is a passionate developer based in Korea. With a degree in
        linguistics and language information processing, he has a strong
        foundation in computer engineering-related studies. A graduate of{" "}
        <a
          className="ssafy-anchor"
          href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
        >
          Samsung Software Academy for youth
        </a>
        , Jhin values continuous learning. He brings experience from working in
        startups, humbly contributing to dynamic and fast-paced environments.
        His focus is on crafting digital services and realizing creative idels.
      </p>
      <div className="more-container">
        <a
          className={`more-anchor ${isHovered ? "secondary" : "primary"}`}
          href={path}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          More about me {">"}
        </a>
      </div>
    </div>
  );
}
export default View;
