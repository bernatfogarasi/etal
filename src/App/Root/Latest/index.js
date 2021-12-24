import styled from "styled-components";
import latest from "assets/latest.jpg";

const Wrapper = styled.div`
  position: relative;
  color: black;
`;

const Description = styled.div`
  background: white;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 200px;
  padding: 10px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Latest = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Image src={latest} />
      <Description>
        Tanulmányok a harcművészet-kutatás idehaza még alig ismert
        diskurzusából...
      </Description>
    </Wrapper>
  );
};

export default Latest;
