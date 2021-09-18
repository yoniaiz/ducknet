import { NAV_HEIGHT } from '@constants/sizes';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main<{ fullHeight: number }>`
  height: calc(${({ fullHeight }) => fullHeight}px - ${NAV_HEIGHT}rem);
  width: calc(100vw - 22.4rem);
  padding: 4.8rem 22.4rem 3rem 6.7rem;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    height: calc(${({ fullHeight }) => fullHeight}px - ${NAV_HEIGHT}rem - 56px);
    width: 100%;
    padding: 5rem 2rem;
  }
`;
