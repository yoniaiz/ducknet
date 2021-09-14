import { DialogProps } from '@material-ui/core/Dialog';
import { DialogTitleProps } from '@material-ui/core/DialogTitle';
import { DialogContentProps } from '@material-ui/core/DialogContent';
import { DialogActionsProps } from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import * as S from './dialog.style';
import { XIcon } from '@components/icons';

const DialogTitle = ({
  children,
  onClose,
  ...other
}: DialogTitleProps & { onClose?: () => void }) => {
  return (
    <S.DialogTitle disableTypography {...other}>
      <Typography variant="h2">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <XIcon size={'2rem'} stroke="white1" />
        </IconButton>
      ) : null}
    </S.DialogTitle>
  );
};

const DialogContent = ({ children, ...rest }: DialogContentProps) => (
  <S.DialogContent {...rest}>{children}</S.DialogContent>
);

const DialogActions = ({ children, ...rest }: DialogActionsProps) => (
  <S.DialogActions {...rest}>{children}</S.DialogActions>
);

export default function Dialog({
  open,
  onClose,
  children,
  ...rest
}: DialogProps & { open: boolean; onClose: () => void }) {
  return (
    <S.Dialog {...rest} onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
      {children}
    </S.Dialog>
  );
}

export const DialogItems = {
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
};
