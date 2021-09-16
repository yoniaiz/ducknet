import { getSession } from 'next-auth/client';
import { Formik } from 'formik';
import ControlledInput from '@ui/ControlledInput';
import Button from '@ui/button';
import Typography from '@material-ui/core/Typography';
import * as S from '@style/sharedStyles.style';
import { GetServerSideProps } from 'next';
import { useSignIn } from '@hooks/useSignIn';
import { IUser } from '@db/user/user.types';
import { routes } from '@constants/routes';

const Login = () => {
  const handleLogin = useSignIn();

  return (
    <S.Container>
      <div>
        <Typography variant="h1" align="center" color="secondary">
          Login
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
          validate={(values) => {
            const errors: Partial<IUser> = {};

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
              <S.FormContainer>
                <ControlledInput id="email" name="email" label="Email" type="email" fullWidth />
                <ControlledInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />

                <Button
                  disabled={!props.dirty || !props.isValid}
                  type="button"
                  onClick={props.submitForm}
                  color="secondary"
                >
                  Submit
                </Button>
              </S.FormContainer>
            );
          }}
        </Formik>
      </div>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: routes.projects,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;
