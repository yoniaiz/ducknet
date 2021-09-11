import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import MaterialUiButton from '@material-ui/core/Button';

const contained = css`
  ${({ theme: { colors, gradients } }) => css`
    &.MuiButton-containedPrimary {
      background: ${gradients.blueRtl};
    }

    &.MuiButton-containedSecondary {
      background: ${gradients.purpleRtl};
    }

    &.Mui-disabled {
      opacity: 0.7;
      background: ${colors.grey1};
    }
  `}
`;

const outlined = css`
  ${({ theme: { colors } }) => css`
    &.MuiButton-outlinedPrimary {
      border: 1px solid ${colors.blue2};
      color: ${colors.blue2};
    }

    &.MuiButton-outlinedSecondary {
      &:hover {
        background-color: rgba(54, 41, 135, 0.04);
        border: 1px solid ${colors.purple2};
      }
      border: 1px solid ${colors.purple1};
      color: ${colors.purple1};
    }
  `}
`;

const variantStyles: Record<string, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  contained,
  outlined,
};

export const Button = styled(MaterialUiButton)`
  ${({ variant = 'contained', theme, size = 'small' }) => css`
    ${variantStyles[variant]}

    &.MuiButton-root {
      padding: ${`0.${variant === 'contained' ? 7 : 6}rem 1.6rem`};
      font-size: ${theme.fontSizes[size]};
      font-family: 'Heebo', sans-serif;
      font-weight: 400;
      line-height: unset;
      letter-spacing: unset;
      text-transform: unset;
      border-radius: 1.6rem;
    }
  `}
`;
