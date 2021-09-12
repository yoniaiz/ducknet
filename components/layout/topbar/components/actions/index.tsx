import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import * as S from './actions.style';

const Actions = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <S.NotificationIconBtn
        aria-label="notifications"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => console.log('notifications')}
        color="inherit"
      >
        <S.NotificationIcon />
      </S.NotificationIconBtn>
      <S.CreateProjectBtn color="primary">Create project</S.CreateProjectBtn>
      <S.IconBtn
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <S.Avatar />
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
        <S.MenuItem onClick={handleClose}>Logout </S.MenuItem>
      </Menu>
    </div>
  );
};

export default Actions;
