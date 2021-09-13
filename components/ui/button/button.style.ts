import styled, { css, DefaultTheme } from 'styled-components';
import MaterialUiButton, { ButtonProps } from '@material-ui/core/Button';

const getBtnStyle = (
  variant: ButtonProps['variant'] = 'contained',
  color: ButtonProps['color'] = 'primary',
  theme: DefaultTheme
) => {
  const contained = {
    primary: css`
      background: ${theme.gradients.purpleRtl};
    `,
    secondary: css`
      background: ${theme.gradients.blueRtl};
    `,
    inherit: css``,
    default: css``,
  };

  const outlined = {
    primary: css`
      border-color: ${theme.colors.purple1};
      color: ${theme.colors.purple1};

      &:hover {
        background-color: rgba(54, 41, 135, 0.04);
        border: 1px solid ${theme.colors.purple1};
      }
    `,
    secondary: css`
      border-color: ${theme.colors.blue2};
      color: ${theme.colors.blue2};

      &:hover {
        background-color: rgba(54, 41, 135, 0.04);
        border: 1px solid ${theme.colors.blue2};
      }
    `,
    inherit: css``,
    default: css``,
  };

  const text = {
    primary: css``,
    secondary: css``,
    inherit: css``,
    default: css``,
  };

  const btnStyles = { contained, outlined, text };

  return btnStyles[variant][color];
};

export const Button = styled(MaterialUiButton)`
  ${({ variant = 'contained', color, theme, size = 'small' }) => css`
    ${getBtnStyle(variant, color, theme)}

    padding: ${variant === 'contained' ? '0.5rem 1.55rem' : '0.4rem 1.45rem'};
    font-size: ${theme.fontSizes[size]};
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    line-height: unset;
    letter-spacing: unset;
    text-transform: unset;
    border-radius: 1.6rem;

    ${variant === 'contained' &&
    css`
      :disabled {
        background: ${theme.colors.grey1};
      }
    `}
  `}
`;
