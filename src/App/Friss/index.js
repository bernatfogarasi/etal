import Page from "components/Page";
import styled from "styled-components";

const Wrapper = styled(Page)``;

const Friss = ({ className }) => {
  return <Wrapper className={className} title="A legfrissebb kötet"></Wrapper>;
};

export default Friss;
