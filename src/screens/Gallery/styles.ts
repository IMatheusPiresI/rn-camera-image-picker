import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const GalleriesWrapper = styled.View`
  flex: 1;
`;

export const ListGalleries = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`` as unknown as typeof FlatList;

export const Separator = styled.View`
  height: ${RFValue(20)}px;
`;
