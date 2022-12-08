import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Dot = styled(Animated.View)`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  background-color: #000000;
  border-radius: ${RFValue(25)}px;
  margin: 0 ${RFValue(5)}px;
`;
