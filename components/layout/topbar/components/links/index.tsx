import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import * as S from './links.style';
import Button from '@ui/button';
import { capitalize } from '@material-ui/core';

const LINKS = ['feed', 'mentors', 'projects'];

export const Links = () => {
  return (
    <S.LinksContainer>
      {LINKS.map((link) => (
        <Link key={link} href={`/${link}`} passHref>
          <MuiLink component={(props) => <Button {...props} variant="outlined" />}>
            {capitalize(link)}
          </MuiLink>
        </Link>
      ))}
    </S.LinksContainer>
  );
};
