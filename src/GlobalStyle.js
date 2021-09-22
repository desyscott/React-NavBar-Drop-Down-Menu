import {createGlobalStyle}  from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin:0;
   padding:0;
box-sizing:border-box;
font-family: 'Permanent Marker', cursive;
font-size:1.2rem;
}


@media screen and (max-width:500px){
    width:100%;
   
}
`