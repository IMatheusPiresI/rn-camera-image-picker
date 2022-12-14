import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(80)}px;

  background-color: ${({ theme }) => theme.colors.pink_light};

  border-top-left-radius: ${RFValue(80)}px;
  border-top-right-radius: ${RFValue(80)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};

  overflow: hidden;

  padding: ${RFValue(20)}px ${RFValue(20)}px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(15)}px;
  left: ${RFValue(40)}px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${RFValue(25)}px;
  justify-content: center;
  padding: 0 ${RFValue(20)}px;
`;

export const TitleModal = styled.Text`
  font-size: ${RFValue(18)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const DescriptionModal = styled.Text`
  font-size: ${RFValue(13)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_REGULAR};
  color: ${({ theme }) => theme.colors.salmon};

  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ListTypes = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: RFValue(10),
    flexGrow: 1,
    justifyContent: 'center',
  },
})`` as unknown as typeof FlatList;

export const Separator = styled.View`
  height: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px 0;
`;
