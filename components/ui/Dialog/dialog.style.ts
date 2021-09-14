import styled from 'styled-components';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';

export const DialogTitle = styled(MuiDialogTitle)`
  background: ${({ theme }) => theme.colors.purple1};
  color: ${({ theme }) => theme.colors.white1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export const Dialog = styled(MuiDialog)`
  border-radius: 8px;
`;

export const DialogActions = styled(MuiDialogActions)`
  margin: 0;
  padding: 1.6rem 2.4rem;
  height: 6.4rem;
  background-color: ${({ theme }) => theme.colors.white1};
`;

export const DialogContent = styled(MuiDialogContent)`
  padding: 1.6rem;
`;
