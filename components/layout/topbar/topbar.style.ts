import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';

export const Header = styled(AppBar)`
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const Toolbar = styled(MuiToolbar)`
  padding-left: 0;
`;

export const Nav = styled.nav`
  padding-left: 75px;
  flex: 1;
  display: flex;
  justify-content: center;

  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    display: none;
  }
`;
