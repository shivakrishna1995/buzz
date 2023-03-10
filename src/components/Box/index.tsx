import styled from 'styled-components/native';

type BoxPropTypes = {
  theme?: any;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  fill?: boolean;
  backgroundColor?: string;
  bgDisabled?: boolean;
  row?: boolean;
  col?: boolean;
  mainCenter?: boolean;
  crossCenter?: boolean;
  center?: boolean;
  height?: string;
  width?: string;
  rounded?: boolean;
};

const Box = styled.View<BoxPropTypes>`
  /* spacing */
  ${({ mt }) => mt && `margin-top: ${mt}`}
  ${({ mr }) => mr && `margin-right: ${mr}`}
  ${({ mb }) => mb && `margin-bottom: ${mb}`}
  ${({ ml }) => ml && `margin-left: ${ml}`}
  ${({ pt }) => pt && `padding-top: ${pt}`}
  ${({ pr }) => pr && `padding-right: ${pr}`}
  ${({ pb }) => pb && `padding-bottom: ${pb}`}
  ${({ pl }) => pl && `padding-left: ${pl}`}
  /* flex */
  ${({ fill }) => fill && `flex: 1`}
  ${({ row }) => row && `flex-direction: row`}
  ${({ col }) => col && `flex-direction: column`}
  ${({ mainCenter }) => mainCenter && `justify-content: center`}
  ${({ crossCenter }) => crossCenter && `align-items: center`}
  ${({ center }) => center && `justify-content: center;align-items: center;`}
  /* color */
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`}
  ${({ bgDisabled, theme }) => bgDisabled && `background-color: ${theme?.color?.disabled}`}
  /* box props */
  ${({ height }) => height && `height: ${height}`}
  ${({ width }) => width && `width: ${width}`}
  ${({ rounded, width }) => rounded && `border-radius: ${width}`}
`;

export default Box;
