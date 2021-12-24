import styled from "styled-components";
import Menu from "./Menu";
import logo from "assets/logo_large.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Content = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto 20px auto;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Logo = styled.img``;

const Page = ({ className, children, title }) => {
  return (
    <Wrapper className={className}>
      <Header>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Menu />
      </Header>
      <Content>
        <Title>{title}</Title>
        <hr></hr>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Page;
