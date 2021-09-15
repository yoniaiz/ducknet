import styled from 'styled-components';

export const Container = styled.div`
  width: 27.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    margin-left: auto;
  }
`;
