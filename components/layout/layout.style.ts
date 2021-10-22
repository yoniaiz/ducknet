import { NAV_HEIGHT } from '@constants/sizes';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main<{ fullHeight: number; isAuthPage: boolean }>`
  height: calc(${({ fullHeight }) => fullHeight}px - ${NAV_HEIGHT}rem);
  overflow-y: auto;
  overflow-x: hidden;

  ${({ isAuthPage }) =>
    isAuthPage
      ? css`
          padding: 4.8rem 0rem 3rem 0rem;
          width: 100%;
        `
      : css`
          width: calc(100vw - 22.4rem);
          padding: 4.8rem 22.4rem 3rem 6.7rem;
        `}

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    height: calc(${({ fullHeight }) => fullHeight}px - ${NAV_HEIGHT}rem - 56px);
    width: 100%;
    padding: 5rem 2rem;
  }
`;
