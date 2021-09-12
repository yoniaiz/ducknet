import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MuiMenuItem from '@material-ui/core/MenuItem';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Button from '@ui/button';

export const NotificationIcon = styled(NotificationsNoneIcon)`
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.colors.black};
`;

export const CreateProjectBtn = styled(Button)`
  margin: 0 1rem;
`;

export const IconBtn = styled(IconButton)`
  padding: 0.4rem;
`;

export const Avatar = styled(AccountCircle)`
  width: 4rem;
  height: 4rem;
  fill: ${({ theme }) => theme.colors.black};
`;

export const MenuItem = styled(MuiMenuItem)`
  font-size: 1.4rem;
`;

export const NotificationIconBtn = styled(IconBtn)`
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
