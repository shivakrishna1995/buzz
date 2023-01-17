import { StyleProp, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

type AvatarProps = {
  uri?: string;
  style?: StyleProp<any>;
};

const Avatar = ({ uri, style }: AvatarProps) => {
  return <AvatarImage style={style} source={{ uri }} />;
};

export default Avatar;
