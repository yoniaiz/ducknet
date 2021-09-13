import { NAV_HEIGHT } from '@constants/sizes';
import styled from 'styled-components';

export const SideBar = styled.aside`
  height: calc(100vh - ${NAV_HEIGHT}rem);
  width: 22.4rem;
  background-color: ${({ theme }) => theme.colors.white1};
  box-shadow: 0px 5px 5px rgb(0 0 0 / 35%);
`;
