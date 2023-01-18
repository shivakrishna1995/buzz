import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ContainerPropTypes = {
  [x: string]: ReactNode;
  center?: boolean;
  noPadding?: boolean;
};

const Wrapper = styled.View<ContainerPropTypes>`
  /* common */
  flex: 1;
  padding: 26px;
  /* flex */
  ${({ center }) => center && `justify-content: center; align-items: center;`}
  /* spacing */
  ${({ noPadding }) => noPadding && 'padding: 0px;'}
`;

const Container = (props: ContainerPropTypes) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper {...props}>{props?.children}</Wrapper>
    </SafeAreaView>
  );
};

export default Container;
