interface ViewProps {
  date: string;
  title: string;
  description: string;
}
function View({ date, title, description }: ViewProps) {
  return <div>{title}</div>;
}
export default View;
