import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: blue;
`;

const Home = () => {
  return (
      <HomeWrapper>
        <h1>Home</h1>
      </HomeWrapper>
  );
};

export default Home;
