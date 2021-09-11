import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%;
    font-family: 'Heebo', sans-serif;
    background-color: #EBEBEB;
 }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
