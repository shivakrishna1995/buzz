import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

type ButtonWrapperProps = {
  theme?: any;
  fontSizes?: any;
  center?: boolean;
};

type ButtonProps = {
  children: any;
  onPress?: () => object;
  center?: boolean;
  testID?: string;
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

const Button = (props: ButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={props?.onPress} testID={props?.testID}>
      <ButtonWrapper {...props}>{props?.children}</ButtonWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Button;
