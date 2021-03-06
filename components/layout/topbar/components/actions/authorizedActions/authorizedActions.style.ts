import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MuiMenuItem from '@material-ui/core/MenuItem';
import Button from '@ui/button';

export const IconBtn = styled(IconButton)`
  padding: 0.4rem;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 0;
  @media only screen and (${({ theme }) => theme.device.min.smallLaptop}) {
    margin-left: 0.8rem;
  }
  margin-right: 0;
`;

export const NotificationIconBtn = styled(IconBtn)`
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin-right: 0.8rem;
  margin-left: 0;
`;

export const CreateProjectBtn = styled(Button)`
  margin-right: 0.8rem;
  @media only screen and (${({ theme }) => theme.device.max.smallLaptop}) {
    display: none;
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  font-size: 1.4rem;
`;
