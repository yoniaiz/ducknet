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

 * {
    ::-webkit-scrollbar{
    width: 8px;
    height: 8px;
    }
    ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.colors.purple1};
    border-radius: 30px;

    &:hover{
      background-color: ${({ theme }) => theme.colors.purple2};
    }
    }
  
    ::-webkit-scrollbar-track{
      background: #ccc;
      border-radius: 100px;
    }
 }

 h1, .MuiTypography-h1 {
   font-size: 3.2rem;
   font-weight: 500;
   font-family: 'Heebo', sans-serif;
 }

 h2, .MuiTypography-h2 {
   font-size: 2.4rem;
   font-weight: 500;
   font-family: 'Heebo', sans-serif;
 }

 h3, .MuiTypography-h3 {
   font-size: 1.6rem;
   font-weight: 500;
   font-family: 'Heebo', sans-serif;
 }

 .MuiTypography-colorPrimary {
   color: ${({ theme }) => theme.colors.purple1}
 }

 .MuiTypography-colorSecondary {
   color: ${({ theme }) => theme.colors.blue2}
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
