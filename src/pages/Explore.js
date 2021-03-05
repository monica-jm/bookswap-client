import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 94vw;
  background-color: white;
`;

const Explore = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default Explore;
