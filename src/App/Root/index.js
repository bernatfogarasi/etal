import Page from "components/Page";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Latest from "./Latest";
import Referrals from "./Referrals";

const Wrapper = styled(Page)``;

const Motto = styled.div`
  font-size: 40px;
  width: fit-content;
  text-align: center;
  margin: 10px auto 30px auto;
`;

const Root = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Link to="/latest">
        <Latest />
      </Link>
      <Motto>Kritikai igény, komparatív elemzés, elméleti szigor...</Motto>
      <Referrals />
    </Wrapper>
  );
};

export default Root;
