import styled from 'styled-components/native';

type TextProps = {
  theme?: any;
  fontSizes?: any;
  primary?: boolean;
  white?: boolean;
  h1?: boolean;
  h2?: boolean;
  h6?: boolean;
  buttonText?: boolean;
  semiBold?: boolean;
  mla?: boolean;
  mra?: boolean;
  mta?: boolean;
  mba?: boolean;
  mva?: boolean;
  mha?: boolean;
  center?: boolean;
  uppercase?: boolean;
};

const Text = styled.Text<TextProps>`
  /* color */
  color: ${({ theme }: any) => theme?.color?.dark};
  ${(props) => props.primary && `color: ${props?.theme?.color?.primary}`}
  ${(props) => props.white && `color: ${props?.theme?.color?.white}`}
  /* font-size */
  ${(props) => props.h1 && `font-size: ${props?.theme?.fontSize?.h1}`}
  ${(props) => props.h2 && `font-size: ${props?.theme?.fontSize?.h2}`}
  ${(props) => props.h6 && `font-size: ${props?.theme?.fontSize?.h6}`}
  ${(props) => props.buttonText && `font-size: ${props?.theme?.fontSize?.buttonText}`}
  /* font-weight */
  ${(props) => props.semiBold && `font-weight: 700`}
  /* spacing */
  ${(props) => props.mla && `margin-left: auto`}
  ${(props) => props.mra && `margin-righht: auto`}
  ${(props) => props.mta && `margin-top: auto`}
  ${(props) => props.mba && `margin-bottom: auto`}
  ${(props) => props.mva && `margin: auto 0px`}
  ${(props) => props.mha && `margin: 0px auto`}
  /* transforms */
  ${(props) => props.uppercase && 'text-transform: uppercase;'}
`;

export default Text;
