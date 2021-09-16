import { getSession } from 'next-auth/client';
import { Formik } from 'formik';
import ControlledInput from '@ui/ControlledInput';
import Button from '@ui/button';
import Typography from '@material-ui/core/Typography';
import * as S from '../../style/sharedStyles.style';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useSignIn } from '@hooks/useSignIn';
import { IUser } from '@db/user/user.types';
import { routes } from '@constants/routes';

const Register = () => {
  const handleLogin = useSignIn();

  const handleSubmit = async (body: IUser) => {
    try {
      await axios.post('/api/auth/signup', body);
      await handleLogin(body);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <div>
        <Typography variant="h1" align="center" color="secondary">
          Register
        </Typography>

        <Formik
          initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors: Partial<IUser> = {};

            if (!values.email) {
              errors.email = 'Required';
            }

            if (!values.password) {
              errors.password = 'Required';
            }

            if (!values.firstName) {
              errors.firstName = 'Required';
            }

            if (!values.firstName) {
              errors.lastName = 'Required';
            }

            return errors;
          }}
        >
          {(props) => {
            return (
              <S.FormContainer>
                <ControlledInput
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                />
                <ControlledInput
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                />
                <ControlledInput
                  required
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <ControlledInput
                  required
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

export default Register;
