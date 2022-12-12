import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WrapperImage = styled.View`
  width: 100%;
  height: 100%;
  max-height: ${({ theme }) => RFValue(theme.metrics.screenHeight * 0.35)}px;
`;

export const WrapperContent = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const ImageView = styled(Animated.Image)`
  width: 100%;
  height: 100%;
`;
