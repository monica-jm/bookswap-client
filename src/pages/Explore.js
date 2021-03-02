import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const ExploreWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: white;
`;

const Explore = () => {
  return (
    <ExploreWrapper>
      <SearchBar />
    </ExploreWrapper>
  );
};

export default Explore;
