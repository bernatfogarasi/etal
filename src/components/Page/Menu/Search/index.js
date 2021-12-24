import styled from "styled-components";

const Wrapper = styled.input`
  margin-left: auto;
  margin-right: 15px;
  font-size: 16px;
  padding: 5px;
  border: none;
  outline: none;
`;

const Search = ({ className }) => {
  return <Wrapper className={className} placeholder="Keresés"></Wrapper>;
};

export default Search;
