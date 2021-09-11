import * as S from './button.style';
import { ButtonProps } from './button.types';

const Button = ({ children, variant = 'contained', ...props }: ButtonProps) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
