import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WrapperImages = styled.View`
  flex: 1;
`;

export const ListImages = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: RFValue(20),
    flexGrow: 1,
  },
})`` as unknown as typeof FlatList;

export const ButtonImage = styled.TouchableOpacity`
  width: ${({ theme }) => RFValue((theme.metrics.screenWidth / 3) * 0.8)}px;
  height: ${({ theme }) => RFValue((theme.metrics.screenWidth / 3) * 0.8)}px;

  margin: ${RFValue(5)}px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: ${RFValue(10)}px;
`;
