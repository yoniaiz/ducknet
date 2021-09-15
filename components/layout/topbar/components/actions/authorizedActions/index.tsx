import { useState } from 'react';
import { signOut } from 'next-auth/client';
import { UserCircleIcon, NotificationIcon } from '@icons';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import { MessagesIcon } from '@components/icons/MessagesIcon';
import { Container } from '../actions.style';
import * as S from './authorizedActions.style';

const AuthorizedActions = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await signOut();
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Tooltip title="Messages">
        <S.NotificationIconBtn
          aria-label="messages"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => console.log('messages')}
          color="inherit"
        >
          <MessagesIcon size={'2rem'} />
        </S.NotificationIconBtn>
      </Tooltip>
      <Tooltip title="Notifications">
        <S.NotificationIconBtn
          aria-label="notifications"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => console.log('notifications')}
          color="inherit"
        >
          <NotificationIcon size={'2rem'} />
        </S.NotificationIconBtn>
      </Tooltip>
      <S.CreateProjectBtn color="primary">Create project</S.CreateProjectBtn>
      <S.IconBtn
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <UserCircleIcon size={'4rem'} />
      </S.IconBtn>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <S.MenuItem onClick={handleClose}>Profile</S.MenuItem>
        <S.MenuItem onClick={handleLogout}>Logout</S.MenuItem>
      </Menu>
    </Container>
  );
};

export default AuthorizedActions;
