import { FlatList } from 'react-native';
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
  padding: ${RFValue(20)}px;
  width: 100%;
`;

export const WrapperDots = styled.View``;

export const WrapperActionButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonOpacity = styled.TouchableOpacity``;

export const TitleButtonOpacity = styled.Text``;
