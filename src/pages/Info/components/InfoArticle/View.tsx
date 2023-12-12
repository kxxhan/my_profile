import "./index.scss";

function View() {
  return (
    <div className="article-container">
      <div className="article-container-inside">
        <header>
          About Jhin <br />
          Han
        </header>
        <div className="p-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum felis suscipit sapien laoreet, eu sodales nisi dapibus.
            Cras id iaculis nisi. Cras neque justo, scelerisque ac convallis in,
            porttitor eget quam. Nunc dolor velit, sagittis non metus at,
            scelerisque hendrerit justo. Nunc imperdiet purus sem, ac tempus leo
            pharetra vel. Morbi rhoncus lacinia velit. Praesent posuere, neque
            at tincidunt dignissim, elit orci imperdiet ipsum, non pharetra
            metus ante vitae libero. Ut venenatis iaculis molestie. Pellentesque
            non leo ut dolor lobortis condimentum at in leo. Vivamus sit amet
            suscipit augue, quis feugiat eros. Maecenas consectetur turpis vel
            ex pellentesque, ac pulvinar sem porta.
          </p>
          <img
            className="profile-color"
            src="pictures/profile_color.jpg"
            alt="JHIN"
          />
        </div>
        <p>
          Nam sed consectetur velit, consectetur laoreet lacus. Nam cursus
          eleifend tortor non gravida. Donec accumsan felis ante, a tincidunt
          lorem maximus in. Maecenas non laoreet augue. Pellentesque diam felis,
          dictum a tortor quis, placerat consequat felis. Etiam feugiat urna
          eget dui molestie pellentesque. In quis pharetra ipsum. Maecenas
          accumsan egestas aliquet. Suspendisse ligula magna, aliquam vel tempor
          at, porta ac metus. Integer ut congue turpis. Aliquam blandit, tortor
          nec congue sagittis, velit massa pulvinar enim, at placerat tellus
          enim eu est. Nam volutpat lectus non dui eleifend, quis feugiat risus
          porta. In vel orci lectus. Mauris nec hendrerit enim. Sed nec faucibus
          elit. Ut tristique risus ullamcorper neque imperdiet, nec consequat
          libero interdum.
        </p>
      </div>
    </div>
  );
}
export default View;
