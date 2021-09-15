import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import Button from '@ui/button';
import { Container } from '../actions.style';
import * as S from './unauthorizedActions.style';
import { routes } from '@constants/routes';

const UnauthorizedActions = () => {
  return (
    <>
      <Container>
        <Link href={routes.login} passHref>
          <MuiLink
            underline="none"
            component={(props) => (
              <Button {...props} color="primary" variant="outlined">
                Login
              </Button>
            )}
          />
        </Link>
        <Link href={routes.register} passHref>
          <MuiLink
            underline="none"
            component={(props) => (
              <S.LoginBtn {...props} color="primary">
                Sign up
              </S.LoginBtn>
            )}
          />
        </Link>
      </Container>
    </>
  );
};

export default UnauthorizedActions;
