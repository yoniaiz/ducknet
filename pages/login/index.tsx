import { getSession, signIn } from 'next-auth/client';
import { Formik } from 'formik';
import ControlledInput from '@ui/ControlledInput';
import Button from '@ui/button';
import Typography from '@material-ui/core/Typography';
import * as S from './login.style';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { replace } = useRouter();

  const handleSubmit = async (values: Inputs) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...values,
    });
    console.log(result);
    if (!result?.error) {
      replace('/projects');
    } else {
      console.log('Not valid');
    }
  };

  return (
    <S.Container>
      <div>
        <Typography variant="h1" align="center" color="secondary">
          Login
        </Typography>

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
              <S.FormContainer>
                <ControlledInput name="email" label="Email" type="email" fullWidth />
                <ControlledInput name="password" label="Password" type="password" fullWidth />

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
        destination: '/projects',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;
