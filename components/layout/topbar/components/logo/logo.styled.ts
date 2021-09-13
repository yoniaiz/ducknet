import styled from 'styled-components';

export const IconContainer = styled.div`
  cursor: pointer;
  width: 22.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    width: 13rem;
    margin-left: 1.6rem;
  }
`;
