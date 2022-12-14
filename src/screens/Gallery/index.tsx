import React from 'react';

import { CardGallery } from '../../components/CardGallery';
import { Header } from '../../components/Header';
import { photoTypes } from '../../mocks/photoTypes';

import * as S from './styles';

export const Gallery = () => (
  <S.Container>
    <Header />
    <S.GalleriesWrapper>
      <S.ListGalleries
        data={photoTypes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardGallery animation={item.animation} isActive={true} />
        )}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
      />
    </S.GalleriesWrapper>
  </S.Container>
);
