import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.pink_light};

  align-items: center;
  justify-content: center;

  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(160)}px;

  elevation: 4;
  shadow-color: ${({ theme }) => theme.colors.salmon};
  overflow: hidden;
`;

export const LastImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ShadowWrapper = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black_25};

  align-items: center;
  justify-content: center;

  position: absolute;

  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const BoxRoundAnimation = styled.View`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.pink_light};

  border-radius: ${RFValue(40)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};

  overflow: hidden;
`;
