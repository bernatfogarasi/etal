import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  color: #ddd;
  text-decoration: none;
  :hover {
    color: #f3cc0c;
  }
  padding: 15px;
`;

const Item = ({ className, children }) => {
  return (
    <Wrapper className={className} to="#">
      {children}
    </Wrapper>
  );
};

export default Item;
