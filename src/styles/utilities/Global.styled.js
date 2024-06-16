import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`


    :root {
        font-family: "Poppins", sans-serif;

        font-weight: 400;
        font-size: 16px;

        /* color-scheme: light dark; */
        /* color: rgba(255, 255, 255, 0.87); */
        background-color: #fff;


        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }



    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        overflow-x: hidden;
    }

    * , *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



    .slide-in {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #374955;
        transform-origin: left;
    }

    .slide-out {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #374955;
        transform-origin: right;
    }

    
`