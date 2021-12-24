import styled from "styled-components";
import Item from "./Item";
import Search from "./Search";

const Wrapper = styled.div`
  background: #12212f;
  display: flex;
  align-items: center;
`;

const Menu = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Item>Címlap</Item>
      <Item>Friss</Item>
      <Item>Előkészületben</Item>
      <Item>Archívum</Item>
      <Item>Rólunk</Item>
      <Search />
    </Wrapper>
  );
};

export default Menu;
