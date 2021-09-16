import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 4.8rem;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    padding-right: 0;
  }
`;

export const FormContainer = styled.div`
  margin-top: 0.8rem;
  width: 40vw;
  min-width: 300px;
`;
