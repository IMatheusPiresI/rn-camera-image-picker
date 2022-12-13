import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const BoxRoundAnimation = styled.View`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.pink_light};

  border-radius: ${RFValue(40)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};

  elevation: 4;
  overflow: hidden;
`;

export const Type = styled(Animated.Text)<{ isActive: boolean }>`
  font-size: ${RFValue(13)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};

  margin-top: ${RFValue(10)}px;

  text-align: center;
`;

export const Shadow = styled(Animated.View)`
  width: 100%;
  height: 100%;
`;
