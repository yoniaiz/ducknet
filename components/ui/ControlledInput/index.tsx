/* eslint-disable @typescript-eslint/ban-types */
import { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';
import * as S from './controlledInput.style';

const ControlledInput = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name || '');

  return (
    <S.Input
      {...props}
      variant="outlined"
      {...field}
      InputLabelProps={{ htmlFor: props.id }}
      error={!!meta.error && meta.touched}
      helperText={meta.touched ? meta.error : ''}
    />
  );
};

export default ControlledInput;
