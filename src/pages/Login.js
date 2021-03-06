import React from "react";
import styled from "styled-components";
import { LoginForm } from '../components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align items: center;
  width:100%;
`;

const Login = () => {
  const [value, setValue] = React.useState("");
  return (
    <Wrapper>
        <LoginForm/>
    </Wrapper>
  );
};

export default Login;