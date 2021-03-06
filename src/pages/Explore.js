import React from "react";
import styled from "styled-components";
import {SearchInput} from "../components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 94vw;
  background-color: blue;
`;

const Explore = () => {
  return (
    <Wrapper>
      <SearchInput/>
    </Wrapper>
  );
};

export default Explore;