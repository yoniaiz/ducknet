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
    width: 100%;
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
    width: fit-content;
    margin: 0.5rem 0 0 0;
    font-family: 'Heebo', sans-serif;
    display: inline-block;
  }
`;
