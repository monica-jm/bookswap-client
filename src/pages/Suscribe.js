import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 94vw;
  background-color: yellow;
`;

const Suscribe = () => {
  return (
    <Wrapper>
      <h1>Suscribe</h1>
    </Wrapper>
  );
};

export default Suscribe;