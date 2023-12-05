import Container from "./Container";

interface iProps {
  url: string;
  icon: string;
  name: string;
}

function index(props: iProps) {
  return <Container {...props} />;
}
export default index;
