import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Wrapper = styled.html`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: top;
  max-width: 100vw;
  font-family: Helvetica, Arial, sans-serif;
  font-size:14px;
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
