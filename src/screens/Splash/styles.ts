import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pink_light};

  align-items: center;
  justify-content: center;
`;

export const AnimatedBox = styled(Animated.View)``;

export const BoxTitle = styled.View`
  position: absolute;
`;

export const Title = styled(Animated.Text)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.salmon};
`;
