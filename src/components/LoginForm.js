import React, {useState} from "react";
import Input from "./Input";
import Container from "./Container";
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { useAuthInfo } from "../hooks/authContext"

const Button = styled.button`
display: flex;
flex-direction: column;
position: relative;
margin-top: 10px;
border: none;
padding: 12px;
font-size: 16px;
width:100%;
align-items:center;
color: gray; 
}
`;

const LoginForm = () => {
  const { login } = useAuthInfo()
  const [data, setData] = useState({
    
  })
  // To prevent the page from refreshing
  const handleSubmit = (e) => {
    e.preventDefault()
    //Petición registro 
    login(data)
    console.log(data)
  }

  return (
    <>
    <Container>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
          <Input
              label="email"
              type="email"
              name="email"
              onChange={e => setData({...data, "email":e})}
            />
            <Input
              label="password"
              type="password"
              name="password"
              onChange={e => setData({...data, "password":e})}
            />
          <Button>Log in</Button>
          <Button style={{ backgroundColor: "#DB4437", color: "white" }}>
              <a href='http://localhost:3001/auth/google'>Sign in with Google</a>
          </Button>
          <Button style={{ backgroundColor: "#4267B2", color: "white" }}>
              <a href='http://localhost:3001/auth/facebook'>Sign in with Facebook</a>
          </Button>
      </form>

        <p><Link to="/signup">Create an account</Link> </p>
    </Container>
    </>
  );
};

export default LoginForm;