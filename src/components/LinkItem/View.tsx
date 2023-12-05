interface ViewProps {
  url: string;
  icon: string;
  name: string;
}
function View({ url, icon, name }: ViewProps): React.ReactElement {
  return (
    <div className="url-item">
      <a href={url}>
        <img src={icon} alt="Youtube Icon" />
        {name}
      </a>
    </div>
  );
}

// 아래와 같이 표현할 수도 있다.
// const View: React.FC<ViewProps> = ({ link }) => (
//   <div className="link-item">
//     <a href={link}>Youtube</a>
//   </div>
// );

export default View;
