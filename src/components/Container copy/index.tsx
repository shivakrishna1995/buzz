import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 26px;
  flex: 1;
`;

const Container = ({ children }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>{children}</Wrapper>
    </SafeAreaView>
  );
};

export default Container;
