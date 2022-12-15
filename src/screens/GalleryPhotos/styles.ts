import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerSelected = styled(Animated.View)`
  margin: ${RFValue(5)}px;
  padding: ${RFValue(4)}px;

  border-radius: ${RFValue(10)}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const WrapperActionsButtons = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const ButtonDelete = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.error};
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  border-radius: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  elevation: 4;
  shadow-color: ${({ theme }) => theme.colors.error};
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

export const EmptyWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const WrapperMessage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyMessage = styled.Text`
  margin: ${RFValue(20)}px 0;

  text-align: center;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const WrapperAnimation = styled.View`
  width: ${({ theme }) => RFValue(theme.metrics.screenWidth * 0.6)}px;
  height: ${RFValue(200)}px;
`;

export const ButtonCamera = styled.TouchableOpacity`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  border-radius: ${RFValue(20)}px;

  margin-left: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  elevation: 4;

  background-color: ${({ theme }) => theme.colors.salmon};
`;
