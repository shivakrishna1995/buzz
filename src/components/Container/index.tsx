import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ContainerPropTypes = {
  [x: string]: ReactNode;
  center?: boolean;
};

const Wrapper = styled.View<ContainerPropTypes>`
  padding: 26px;
  flex: 1;
  /* flex */
  ${({ center }) => center && `justify-content: center; align-items: center;`}
`;

const Container = (props: ContainerPropTypes) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper {...props}>{props?.children}</Wrapper>
    </SafeAreaView>
  );
};

export default Container;
