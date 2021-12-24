import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 90vw;
  max-width: 1000px;
  margin: 20px auto;
  gap: 20px;
  height: fit-content;
`;

const Header = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Header;
