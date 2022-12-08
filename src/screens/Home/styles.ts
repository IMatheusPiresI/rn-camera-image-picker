import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.pink_light};
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.salmon};

  text-align: center;
`;

export const WrapperAnimation = styled.View`
  width: ${RFValue(200)}px;

  height: ${RFValue(200)}px;
`;

export const ContainerOptions = styled.View`
  width: 100%;

  padding: ${RFValue(16)}px;

  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
  border-radius: ${RFValue(24)}px;
  justify-content: center;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.salmon};

  border-radius: ${RFValue(16)}px;

  padding: ${RFValue(15)}px;
  margin: ${RFValue(10)}px 0;

  elevation: 5;
`;

export const TitleButton = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
  color: ${({ theme }) => theme.colors.shape};
`;
