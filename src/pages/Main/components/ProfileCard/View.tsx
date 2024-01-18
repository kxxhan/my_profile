import "./index.scss";

function View() {
  return (
    <div className="profile_container">
      <div className="profile_card">
        <div className="introduce_container">
          <h2 className="profile_name">Jhin Han</h2>
          <p className="profile_about">
            Software Developer ( Front-End / WebGL )
          </p>
        </div>
        <div className="img_container">
          <img src="profile.jpeg" alt="" className="profile_img" />
        </div>
      </div>
    </div>
  );
}
export default View;
