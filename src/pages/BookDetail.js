import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 94vw;
  background-color: green;
`;

const BookDetail = () => {
  return (
    <Wrapper>
      <h1>BookDetail</h1>
    </Wrapper>
  );
};

export default BookDetail;