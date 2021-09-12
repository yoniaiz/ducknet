import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import MuiMenuItem from '@material-ui/core/MenuItem';
import Button from '@ui/button';

export const CreateProjectBtn = styled(Button)`
  margin: 0 1.6rem 0 0.8rem;
`;

export const IconBtn = styled(IconButton)`
  padding: 0.4rem;
  color: ${({ theme }) => theme.colors.black};

  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  font-size: 1.4rem;
`;

export const NotificationIconBtn = styled(IconBtn)`
  border: 1px solid ${({ theme }) => theme.colors.black};
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
