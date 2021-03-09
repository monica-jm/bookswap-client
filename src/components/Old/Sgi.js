import React, {useState} from "react";
import Input from "../Input";
import Container from "./Container";
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { useAuthInfo } from "../../hooks/authContext"


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

const SignupForm = () => {
    const { signup } = useAuthInfo()
    const [data, setData] = useState({
    })
    // To prevent the page from refreshing
    const handleSubmit = (e) => {
    e.preventDefault()
    //Petición registro 
    signup(data)
    console.log(data)
  }

  return (
    <>
        <Container>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <Input
                label="username"
                type="text"
                name="username"
                onChange={e => setData({...data, "username":e})}
            />
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
            <Button>Sign up</Button>
            <Button style={{ backgroundColor: "#DB4437", color: "white" }}>
                <a href='http://localhost:3001/auth/google'>Sign in up Google</a>
            </Button>
            <Button style={{ backgroundColor: "#4267B2", color: "white" }}>
                <a href='http://localhost:3001/auth/facebook'>Sign in with Facebook</a>
            </Button>
        </form>


        <p>Already have an account?<Link to="/auth">Log in</Link> </p>
        </Container>
    </>
  );
};

export default SignupForm;
