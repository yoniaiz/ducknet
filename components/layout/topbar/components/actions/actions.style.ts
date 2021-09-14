import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    margin-left: auto;
  }
`;
