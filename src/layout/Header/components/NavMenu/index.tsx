import Container from "./Container";

interface indexProps {
  isExpand: boolean;
  onClickChevron: () => void;
}
function index({ isExpand, onClickChevron }: indexProps) {
  return <Container isExpand={isExpand} onClickChevron={onClickChevron} />;
}
export default index;
