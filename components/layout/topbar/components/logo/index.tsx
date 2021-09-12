import Link from 'next/link';
import Image from 'next/image';
import Icon from 'public/assets/svg/Logo.svg';
import * as S from './logo.styled';

const Logo = () => {
  return (
    <S.IconContainer>
      <Link href="/" passHref>
        <Image src={Icon} alt="logo" />
      </Link>
    </S.IconContainer>
  );
};

export default Logo;
