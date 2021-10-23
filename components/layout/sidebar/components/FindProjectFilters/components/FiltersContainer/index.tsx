import * as S from './filtersContainer.style';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  label: string;
}
const FiltersContainer = ({ children, label }: Props) => {
  return (
    <S.FiltersContainer>
      <h3>{label}</h3>
      <S.CheckboxesContainer>{children}</S.CheckboxesContainer>
    </S.FiltersContainer>
  );
};

export default FiltersContainer;
