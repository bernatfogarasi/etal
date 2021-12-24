import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Content = styled.div`
  color: #6c859b;
`;

const Category = ({ className, children, title, style }) => {
  return (
    <Wrapper className={className} style={style}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Category;
