import { NAV_HEIGHT } from '@constants/sizes';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styled, { css } from 'styled-components';

export const Navigation = styled(MuiBottomNavigation)`
  height: ${NAV_HEIGHT}rem;
  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%), 0px -4px 5px 0px rgb(0 0 0 / 14%),
    0px -1px 10px 0px rgb(0 0 0 / 12%);
`;

export const NavigationItem = styled(BottomNavigationAction)<{ $active: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      & > * {
        color: ${({ theme }) => theme.colors.purple1};
      }
    `}
  .MuiBottomNavigationAction-label {
    font-size: 1.4rem;
    opacity: 1;
  }
`;
