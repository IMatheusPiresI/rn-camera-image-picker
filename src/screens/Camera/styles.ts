import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;

export const CameraWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
`;

export const ButtonOpacity = styled.TouchableOpacity``;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(125)}px;
  background-color: ${({ theme }) => theme.colors.black};

  align-items: center;
  justify-content: center;
`;

export const FooterWrapperButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonCamera = styled.TouchableOpacity`
  width: ${RFValue(75)}px;
  height: ${RFValue(75)}px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: ${RFValue(40)}px;
  overflow: hidden;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.2);

  border-radius: ${RFValue(25)}px;
`;
