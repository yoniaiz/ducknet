import Button from '@ui/button';
import { DialogItems, useModalState } from '@ui/Dialog';
import { useForm, Control } from 'react-hook-form';
import { Container } from '../actions.style';
import * as S from './unauthorizedActions.style';
import ControlledInput from '@ui/ControlledInput';

type Inputs = {
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const LoginForm = ({ control }: { control: Control<Inputs, object> }) => {
  return (
    <>
      <ControlledInput
        control={control}
        controllerProps={{ name: 'email', rules: { required: 'Email required' }, defaultValue: '' }}
        textFieldProps={{ label: 'Email', type: 'email', fullWidth: true }}
      />
      <ControlledInput
        control={control}
        controllerProps={{
          name: 'password',
          rules: { required: 'Password required' },
          defaultValue: '',
        }}
        textFieldProps={{ label: 'Password', type: 'password', fullWidth: true }}
      />
    </>
  );
};

const UnauthorizedActions = () => {
  const [open, modalActions] = useModalState(true);
  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Button onClick={modalActions.openModal} color="primary" variant="outlined">
          Login
        </Button>
        <S.LoginBtn color="primary">Sign up</S.LoginBtn>
      </Container>
      <DialogItems.Dialog onClose={modalActions.closeModal} open={open}>
        <DialogItems.DialogTitle onClose={modalActions.closeModal}>Login</DialogItems.DialogTitle>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <DialogItems.DialogContent>
            <LoginForm control={control} />
          </DialogItems.DialogContent>
          <DialogItems.DialogActions>
            <Button color="secondary" variant="outlined">
              cancel
            </Button>
            <Button type="submit" color="secondary">
              Submit
            </Button>
          </DialogItems.DialogActions>
        </form>
      </DialogItems.Dialog>
    </>
  );
};

export default UnauthorizedActions;
