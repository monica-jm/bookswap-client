import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const Wrapper = styled.html`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 100vw;
  font-family: Helvetica, Arial, sans-serif;
  font-size:16px;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <NavBar />
        {children}
      </Wrapper>
    </>
  );
};

export default PageLayout;
