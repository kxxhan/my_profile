import "./index.scss";

function View() {
  return (
    <div className="leftbar-container">
      <div className="leftbar-container-inside">
        <h1>
          JHIN ON
          <br />
          SOFTWARE
        </h1>
        <h2>YOUR HOST</h2>
        <img className="profile-wb" src="pictures/profile_wb.jpg" alt="JHIN" />
        <p>
          I'm Jhin, a front-end developer in Korea.{" "}
          <a href="/projects">more about me.</a>
        </p>
      </div>
    </div>
  );
}
export default View;
