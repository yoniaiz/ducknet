import * as S from './button.style';
import { ButtonProps } from './button.types';

interface Props extends ButtonProps {
  isLoading?: boolean;
}

const Button = ({ children, variant = 'contained', isLoading, disabled, ...props }: Props) => {
  return (
    <S.Button variant={variant} {...props} disabled={disabled || isLoading}>
      {isLoading && <S.Loader size="2rem" />}
      {children}
    </S.Button>
  );
};

export default Button;
