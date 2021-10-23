import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as S from './checkbox.style';

interface Props {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ value, label, onChange, checked }: Props) => {
  return (
    <FormControlLabel
      control={
        <S.Checkbox
          color="primary"
          onChange={onChange}
          checked={checked}
          value={value}
          id={value}
        />
      }
      label={<S.FormLabel>{label}</S.FormLabel>}
      htmlFor={value}
    />
  );
};

export default Checkbox;
