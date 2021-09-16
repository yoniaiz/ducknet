import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import Button from '@ui/button';
import { Container } from '../actions.style';
import * as S from './unauthorizedActions.style';
import { routes } from '@constants/routes';

const UnauthorizedActions = () => {
  return (
    <>
      <Container data-testid="actions-container">
        <Link href={routes.login} passHref>
          <MuiLink underline="none" data-testid="link--login">
            <Button color="primary" variant="outlined">
              Login
            </Button>
          </MuiLink>
        </Link>
        <Link href={routes.register} passHref>
          <MuiLink underline="none" data-testid="link--register">
            <S.LoginBtn color="primary">Sign up</S.LoginBtn>
          </MuiLink>
        </Link>
      </Container>
    </>
  );
};

export default UnauthorizedActions;
