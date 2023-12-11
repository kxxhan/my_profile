import Container from "./Container";

interface indexProps {
  isExpand: boolean;
  onClickChevron: () => void;
}
function index({ isExpand, onClickChevron }: indexProps) {
  // console.log()
  return <Container isExpand={isExpand} onClickChevron={onClickChevron} />;
}
export default index;
