import { NAV_HEIGHT } from '@constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  height: calc(100vh - ${NAV_HEIGHT}rem);
  width: 100%;
  padding: 4.8rem 12rem 3rem 6.7rem;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    height: calc(100vh - ${NAV_HEIGHT * 2}rem);
  }
`;
