import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

type ButtonWrapperProps = {
  theme?: any;
  fontSizes?: any;
  center?: boolean;
};

type ButtonProps = {
  children: any;
  onPress?: () => null;
  center?: boolean;
};

const ButtonWrapper = styled.View<ButtonWrapperProps>`
  /* common */
  height: 54px;
  border-radius: 20px;
  /* color */
  background-color: ${({ theme }) => theme?.color?.primary};
  /* flex */
  ${(props) => props?.center && `justify-content: center; align-items: center;`}
`;

const Button = (props: any) => {
  return (
    <TouchableWithoutFeedback onPress={props?.onPress}>
      <ButtonWrapper {...props}>{props?.children}</ButtonWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Button;
