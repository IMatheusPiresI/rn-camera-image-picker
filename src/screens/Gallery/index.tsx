import React from 'react';
import { useSelector } from 'react-redux';

import { CardGallery } from '../../components/CardGallery';
import { Header } from '../../components/Header';
import { RootState } from '../../store';

import * as S from './styles';

export const Gallery = () => {
  const galleries = useSelector((state: RootState) => state.photos?.galleries);

  return (
    <S.Container>
      <Header title="Galleries" />
      <S.GalleriesWrapper>
        <S.ListGalleries
          data={galleries}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <CardGallery title={item.title} gallery={item} />
          )}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          numColumns={2}
          ItemSeparatorComponent={() => <S.Separator />}
        />
      </S.GalleriesWrapper>
    </S.Container>
  );
};
