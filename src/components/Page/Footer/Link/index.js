import styled from "styled-components";

const Wrapper = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  :hover {
    color: #f3cc0c;
  }
`;

const Link = ({ target = "_blank", rel = "noreferrer noopener", ...props }) => {
  return <Wrapper target={target} rel={rel} {...props}></Wrapper>;
};

export default Link;
