import MuiCheckbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

export const Checkbox = styled(MuiCheckbox)`
  color: ${({ theme }) => theme.colors.black};

  &.Mui-checked {
    color: ${({ theme }) => theme.colors.purple1};
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;

export const FormLabel = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
`;
