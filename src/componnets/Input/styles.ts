import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const WrapperLabel = styled.View`
  position: absolute;
  top: ${RFValue(-10)}px;
  left: ${RFValue(20)}px;

  padding: 0 ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.pink_light};
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};

  color: ${({ theme }) => theme.colors.salmon};
`;

export const InputText = styled.TextInput<{ textArea: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink_light};

  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
  border-radius: ${RFValue(10)}px;

  padding: ${RFValue(10)}px ${RFValue(10)}px;

  font-size: ${RFValue(13)}px;

  ${({ textArea }) =>
    textArea &&
    css`
      height: ${RFValue(80)}px;
      max-height: ${RFValue(80)}px;
    `}
`;
