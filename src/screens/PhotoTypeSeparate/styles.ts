import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const PhotoContainer = styled.View`
  height: ${RFValue(200)}px;
  align-items: center;
  justify-content: center;
  background-color: #0002;
`;

export const ButtonImageWrapper = styled.TouchableOpacity`
  width: ${RFValue(300)}px;
  height: ${RFValue(180)}px;
  background-color: red;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
  overflow: hidden;
  elevation: 5;
`;

export const ImagePhoto = styled.Image`
  width: 100%;
  height: 100%;
`;
