import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%;
    font-family: 'Heebo', sans-serif;
    background-color: ${({ theme }) => theme.colors.white2};
 }

 body {
   font-size: 1.6rem;
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
