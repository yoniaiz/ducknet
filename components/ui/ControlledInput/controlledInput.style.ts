import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const Input = styled(TextField)`
  font-size: 1.6rem;
  margin: 1.6rem 0;
  color: ${({ theme }) => theme.colors.black};

  label {
    font-size: 1.4rem;

    &.MuiInputLabel-outlined.MuiInputLabel-shrink {
      background: ${({ theme }) => theme.colors.white1};
      padding: 0 10px 0 5px;
    }
  }

  input {
    font-size: 1.6rem;
  }
`;
