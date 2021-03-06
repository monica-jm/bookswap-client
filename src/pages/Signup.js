import React from "react";
import styled from "styled-components";
import { SignupForm } from '../components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align items: center;
  width:100%;
`;

const Signup = () => {
  return (
    <Wrapper>
        <SignupForm/>
    </Wrapper>
  );
};

export default Signup;