import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: red;
`;

export const Title = styled.Text``;

export const OnboardingPages = styled.FlatList`
  flex: 1;
  background-color: blue;
` as unknown as typeof FlatList;

export const WrapperInfo = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const WrapperDots = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${RFValue(35)}px;
`;

export const WrapperActionButtons = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(20)}px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.salmon};
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px 0;

  elevation: 4;

  border-radius: ${RFValue(40)}px;
`;

export const TitleButtonOpacity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};

  color: ${({ theme }) => theme.colors.pink_light};
`;

export const ContainerStartedButton = styled.View`
  width: 100%;

  position: absolute;
  bottom: 0;

  padding: ${RFValue(20)}px;
  z-index: 0;
`;

export const WrapperButtonStart = styled(Animated.View)`
  width: 100%;
`;

export const ButtonStart = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.salmon};
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px 0;
  width: 100%;

  elevation: 4;

  border-radius: ${RFValue(40)}px;
`;
