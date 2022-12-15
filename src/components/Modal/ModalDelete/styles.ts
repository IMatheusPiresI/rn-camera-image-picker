import { RFValue } from 'react-native-responsive-fontsize';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

import { Button } from '../../Button';

export const WrapperModal = styled(Modal)`
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: ${({ theme }) => RFValue(theme.metrics.screenWidth * 0.75)}px;
  height: 100%;
  max-height: ${RFValue(275)}px;

  background-color: ${({ theme }) => theme.colors.pink_light};

  border-radius: ${RFValue(20)}px;

  padding: ${RFValue(20)}px;

  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
`;

export const WrapperTexts = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
  color: ${({ theme }) => theme.colors.salmon};

  margin-top: ${RFValue(5)}px;
`;

export const WrapperActionButtons = styled.View`
  margin-top: auto;
`;

export const WrapperButton = styled.View`
  margin: ${RFValue(5)}px;
`;

export const LongButton = styled(Button)`
  width: 100%;
`;
