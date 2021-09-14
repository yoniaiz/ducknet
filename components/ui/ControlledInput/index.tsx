/* eslint-disable @typescript-eslint/ban-types */
import { Controller, Control, ControllerProps, FieldValues } from 'react-hook-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import * as S from './controlledInput.style';

interface Props<T extends FieldValues> {
  control: Control<T, object>;
  textFieldProps: TextFieldProps;
  controllerProps: Omit<ControllerProps, 'render'>;
  className?: string;
}

const ControlledInput = <T extends FieldValues>({
  control,
  textFieldProps,
  controllerProps,
  className,
}: Props<T>) => {
  return (
    <Controller
      control={control as Control<FieldValues, object>}
      {...controllerProps}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <S.Input
          {...textFieldProps}
          className={className}
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default ControlledInput;
