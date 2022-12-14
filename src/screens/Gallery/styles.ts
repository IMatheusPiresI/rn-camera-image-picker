import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex: 1;
`;

export const GalleriesWrapper = styled.View``;

export const ListGalleries = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`` as unknown as typeof FlatList;
