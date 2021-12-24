import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #000;
  text-decoration: none;
  :hover {
    background: #eee7c6;
    /* background: #f3cc0c; */
  }
  transition: 0.2s;
  padding: 20px;
`;

const Illustration = styled.div`
  width: 120px;
  position: relative;
`;

const IllustrationBackground = styled.div`
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1;
  background: #f3cc0c;
`;

const IllustrationImage = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 110px;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const Title = styled.div`
  font-size: 25px;
`;

const Description = styled.div`
  text-align: center;
  font-size: 16px;
`;

const Referral = ({ className, to, title, description, image }) => {
  return (
    <Wrapper className={className} to={to}>
      <Illustration>
        <IllustrationBackground />
        <IllustrationImage src={image} alt="" />
      </Illustration>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Referral;
