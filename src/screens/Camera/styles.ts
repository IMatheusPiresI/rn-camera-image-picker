import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCamera = styled.View`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;

export const CameraWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

export const LoadingWrapper = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const ButtonOpacity = styled.TouchableOpacity``;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.pink_light};

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

  background-color: ${({ theme }) => theme.colors.salmon};

  border-radius: ${RFValue(40)}px;

  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.salmon};

  border-radius: ${RFValue(25)}px;
`;
