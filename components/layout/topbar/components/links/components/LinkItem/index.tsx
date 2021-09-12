import Link from 'next/link';
import * as S from './linkItem.style';
import { useRouter } from 'next/router';
import Tooltip from '@material-ui/core/Tooltip';
import { capitalize } from '@material-ui/core';

interface Props {
  Icon: JSX.Element;
  link: string;
}

const LinkItem = ({ Icon, link }: Props) => {
  const { pathname } = useRouter();

  const selectedLink = pathname.includes(link);

  return (
    <Link href={`/${link}`} passHref>
      <Tooltip enterDelay={500} title={capitalize(link)}>
        <S.LinkItemContainer selected={selectedLink} aria-label={link}>
          {Icon}
        </S.LinkItemContainer>
      </Tooltip>
    </Link>
  );
};

export default LinkItem;
