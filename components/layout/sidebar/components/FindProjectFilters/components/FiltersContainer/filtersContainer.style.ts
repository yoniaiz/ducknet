import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 1.6rem;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
  }

  padding-top: 1.6rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-60%);
    width: 70%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.3;
  }

  &:not(:first-of-type) {
    padding-top: 3.2rem;

    &::after {
      top: 1.6rem;
    }
  }
`;

export const CheckboxesContainer = styled.div`
  max-height: 20rem;
  overflow: auto;
  display: flex;
  flex-direction: column;

  overflow: auto;
`;
