import { NAV_HEIGHT } from '@constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  height: calc(100vh - ${NAV_HEIGHT}rem);
  padding: 4.8rem 6.7rem 3rem 12rem;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    height: calc(100vh - ${NAV_HEIGHT * 2}rem);
  }
`;
