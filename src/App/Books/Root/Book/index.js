import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  gap: 20px;
  text-decoration: none;
  justify-content: space-between;
  color: #000;
  :hover {
    background: #eee7c6;
  }
  padding: 10px;
  transition: 0.2s;
`;

const Year = styled.div`
  opacity: 0.6;
  font-size: 25px;
`;

const Title = styled.div`
  font-size: 25px;
`;

const Book = ({ className, year, title, to }) => {
  return (
    <Wrapper className={className} to={to}>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Wrapper>
  );
};

export default Book;
