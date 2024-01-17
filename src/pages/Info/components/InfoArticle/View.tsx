import "./index.scss";

function View() {
  return (
    <div className="article-container">
      <div className="article-container-inside">
        <article>
          <header>About Jhin</header>
          <div className="p-container">
            <p className="about-container">
              <p className="about-paragraph">Hello! My name is Jhin.</p>
              <p className="about-paragraph">
                I graduated from Chungnam National University and majored in
                linguistics and computer engineering. My main major is
                linguistics, but I gained knowledge in more diverse fields by
                studying computer engineering as an associated major.
              </p>
              <p className="about-paragraph">
                I mainly use JavaScript and have a lot of practical project
                experience using various technology stacks such as React, React
                Native, and Vue.
              </p>
            </p>

            <img
              className="profile-color"
              src="pictures/profile_color.jpg"
              alt="JHIN"
            />
          </div>
          <p className="about-container">
            <p className="about-paragraph">
              In addition to development, I am interested in various fields such
              as video editing and design, so in the future, I will work on
              creative projects using various skills.
            </p>
            <p className="about-paragraph">
              Open to new challenges and learning, I'm currently working on a
              career in front-end development. As a developer who enjoys working
              and learning together, I enjoy communicating and collaborating at
              any time.
            </p>
          </p>
        </article>
        <article>
          <header>EXPREREINCE</header>
          <section className="exp-section">
            <p className="period-paragraph">
              Jan 2022 – May 2023 / Seoul, Korea
            </p>
            <p className="detail-paragraph">
              <i>
                <a href="https://redbrick.land/">+</a>
              </i>{" "}
              REDBRICK / Front End Engineer, 3D Graphics Engineer
            </p>
          </section>
          <section className="exp-section">
            <p className="period-paragraph">
              Jan 2021 – Dec 2022 / Daejeon, Korea
            </p>
            <p className="detail-paragraph">
              <i>
                <a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp">+</a>
              </i>{" "}
              Samsung Software Academy For Youth / Trainee
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
export default View;
