import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import * as S from './actions.style';
import { UserCircleIcon, NotificationIcon } from '@icons';
import Tooltip from '@material-ui/core/Tooltip';
import { MessagesIcon } from '@components/icons/MessagesIcon';
import { useSession } from 'next-auth/client';
import Button from '@ui/button';
import { DialogItems } from '@ui/Dialog';

const Actions = () => {
  const [session] = useSession();

  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (session) {
    return (
      <S.Container>
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
          <S.MenuItem onClick={handleClose}>Logout </S.MenuItem>
        </Menu>
      </S.Container>
    );
  }

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <S.Container>
        <Button onClick={handleClickOpen} color="primary" variant="outlined">
          Login
        </Button>
        <S.LoginBtn color="primary">Sign up</S.LoginBtn>
      </S.Container>
      <DialogItems.Dialog onClose={handleDialogClose} open={isDialogOpen}>
        <DialogItems.DialogTitle onClose={handleDialogClose}>Login</DialogItems.DialogTitle>
        <DialogItems.DialogContent></DialogItems.DialogContent>
        <DialogItems.DialogActions>
          <Button color="secondary" variant="outlined">
            cancel
          </Button>
          <Button color="secondary">Submit</Button>
        </DialogItems.DialogActions>
      </DialogItems.Dialog>
    </>
  );
};

export default Actions;
