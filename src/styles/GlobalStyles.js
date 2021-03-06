import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body{
        margin: 0; 
        padding:0;
        background: white;
        font-family: Montserrat, sans-serif; 
        font-weight: 500;
        font-size:16px;
        min-height:100vh;
    }

    h1{
        font-family: Raleway, sans-serif; 
        font-weight: 500;
        font-size:2.5 rem;

    h2{
        font-family: Raleway, sans-serif; 
        font-weight: 500;
        font-size:2 rem;
    }

    h3{
        font-family: Raleway, sans-serif; 
        font-weight: 500;
        font-size:1.25 rem;
    }

    h4{
        font-family: Montserrat, sans-serif; 
        font-weight: 500;
        font-size:1 rem;
    }

    h5{
        font-family: Montserrat, sans-serif; 
        font-weight: 300 italic;
        font-size:1 rem;
    }

    h6{
        font-family: Montserrat, sans-serif; 
        font-weight: 300;
        font-size:1 rem;
    }

    p{
        font-family: Montserrat, sans-serif; 
        font-weight: 300;
        font-size:.8 rem;
    }
`