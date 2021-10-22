import { NAV_HEIGHT } from '@constants/sizes';
import styled, { css } from 'styled-components';

export const SideBar = styled.aside`
  height: calc(100vh - ${NAV_HEIGHT}rem);
  width: 22.4rem;
  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0px 5px 5px rgb(0 0 0 / 35%);
`;

export const LinksContainer = styled.ul`
  margin-top: 1rem;
  padding: 0;
`;

export const LinkWrapper = styled.li<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  height: 3.2rem;
  z-index: 2;
  padding-left: 1.6rem;
  text-decoration: none;

  width: 100%;

  ::after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: ${({ theme }) => theme.gradients.blueRtl};
    transition: width 0.2s ease-in;
  }

  a {
    text-decoration: none;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s ease-in;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      ::after {
        width: 100%;
      }

      a {
        color: ${({ theme }) => theme.colors.white1};
      }
    `}
`;
