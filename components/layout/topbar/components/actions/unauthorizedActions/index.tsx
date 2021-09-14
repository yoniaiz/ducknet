import Button from '@ui/button';
import { DialogItems, useModalState } from '@ui/Dialog';
import { signIn } from 'next-auth/client';
import { Container } from '../actions.style';
import * as S from './unauthorizedActions.style';
import ControlledInput from '@ui/ControlledInput';
import { Formik } from 'formik';

type Inputs = {
  email: string;
  password: string;
};

const UnauthorizedActions = () => {
  const [open, modalActions] = useModalState(true);

  const handleSubmit = async (values: Inputs) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...values,
    });

    if (!result?.error) {
      console.log('valid');
    } else {
      console.log('Not valid');
    }
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
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors: Partial<Inputs> = {};

            if (!values.email) {
              errors.email = 'Required';
            }

            if (!values.password) {
              errors.password = 'Required';
            }

            return errors;
          }}
        >
          {(props) => {
            return (
              <>
                <DialogItems.DialogContent>
                  <ControlledInput name="email" label="Email" type="email" fullWidth />
                  <ControlledInput name="password" label="Password" type="password" fullWidth />
                </DialogItems.DialogContent>
                <DialogItems.DialogActions>
                  <Button color="secondary" variant="outlined">
                    cancel
                  </Button>
                  <Button
                    disabled={!props.dirty || !props.isValid}
                    type="button"
                    onClick={props.submitForm}
                    color="secondary"
                  >
                    Submit
                  </Button>
                </DialogItems.DialogActions>
              </>
            );
          }}
        </Formik>
      </DialogItems.Dialog>
    </>
  );
};

export default UnauthorizedActions;
