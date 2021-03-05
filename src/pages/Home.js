import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 94vw;
  background-color: blue;
`;

const Home = () => {
  return (
      <Wrapper>
        <h1>Home</h1>
      </Wrapper>
  );
};

export default Home;
