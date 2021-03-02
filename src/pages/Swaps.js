import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: yellow;
`;

const Swaps = () => {
  return (
    <Wrapper>
      <h1>Swaps</h1>
    </Wrapper>
  );
};

export default Swaps;