import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap');

    html{
        margin: 0; 
        padding:0;
        background-color: white;
        font-family: Montserrat, sans-serif; 
        font-weight: 500;
        font-size:16px;
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

    .eye{
        background-color:"white", 
        border-width:0,
    }
    .eye:hover{
        background-color:"white", 
        border-width:0,
    }
    .eye:active{
        background-color:"white", 
        border-width:0,
    }

`