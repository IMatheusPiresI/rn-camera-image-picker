import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerSelected = styled(Animated.View)`
  width: ${({ theme }) => RFValue((theme.metrics.screenWidth / 3) * 0.82)}px;
  height: ${({ theme }) => RFValue((theme.metrics.screenWidth / 3) * 0.82)}px;
  padding: ${RFValue(4)}px;
  margin: ${RFValue(2)}px;
  border-radius: ${RFValue(10)}px;
  background-color: red;
`;

export const ButtonImage = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: ${RFValue(10)}px;
`;
