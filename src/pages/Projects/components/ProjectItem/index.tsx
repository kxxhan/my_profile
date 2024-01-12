import Container from "./Container";

interface projectItem {
  date: string;
  title: string;
  description: string;
  // TEMP
  techs: string[];
}

function index(props: any) {
  return <Container {...props} />;
}
export default index;
