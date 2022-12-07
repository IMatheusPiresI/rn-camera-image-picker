import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ theme }) => theme.metrics.screenWidth}px;
  background-color: ${({ theme }) => theme.colors.pink_light};

  align-items: center;
  justify-content: center;
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD_ITALIC};
  color: ${({ theme }) => theme.colors.surface};
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: center;
  max-width: ${RFValue(300)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
  color: ${({ theme }) => theme.colors.surface};
`;

export const ContainerAnimation = styled.View`
  width: ${RFValue(185)}px;
  height: ${RFValue(185)}px;
  margin: ${RFValue(20)}px 0;
`;
