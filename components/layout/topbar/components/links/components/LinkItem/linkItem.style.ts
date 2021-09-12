import styled, { css } from 'styled-components';
import MuiLink from '@material-ui/core/Link';

export const StyledLink = styled(MuiLink)`
  color: ${({ theme }) => theme.colors.black};
`;

export const LinkItemContainer = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 33.33%;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: ${({ theme, selected }) => (selected ? theme.colors.purple2 : theme.colors.black)};
    transition: 0.5s ease color;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.purple2};
    }
  }

  ::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    background: ${({ theme }) => theme.gradients.purpleRtl};
  }

  ${({ selected }) =>
    selected &&
    css`
      ::after {
        width: 100%;
      }
    `}
`;
