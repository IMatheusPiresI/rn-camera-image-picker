import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(60)}px;

  background-color: ${({ theme }) => theme.colors.pink_light};

  border-top-left-radius: ${RFValue(80)}px;
  border-top-right-radius: ${RFValue(80)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: ${RFValue(40)}px;
`;

export const TitleModal = styled.Text`
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(30)}px ${RFValue(40)}px;
`;
