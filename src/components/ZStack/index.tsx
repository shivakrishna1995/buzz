import React, { Children } from 'react';
import styled from 'styled-components/native';

const ZStackWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const ZStackItem = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ZStack = ({ children }: any) => {
  return (
    <ZStackWrapper>
      {Children?.map?.(React.Children.toArray(children), (child: any, index: any) => {
        return <ZStackItem key={index}>{React.cloneElement(child)}</ZStackItem>;
      })}
    </ZStackWrapper>
  );
};

export default ZStack;
