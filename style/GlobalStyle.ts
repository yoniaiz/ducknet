import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%;
    font-family: 'Heebo', sans-serif;
    
 }

 body {
   font-size: 1.6rem;
   background-color: ${({ theme }) => theme.colors.white2};
 }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .MuiTooltip-tooltip {
    font-size: 1.4rem;
  }
`;
