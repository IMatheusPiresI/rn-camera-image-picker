import { useRoute } from '@react-navigation/native';
import React from 'react';

import { Header } from '../../componnets/Header';

import * as S from './styles';

export const PhotoTypeSeparate = () => {
  const routes = useRoute();

  const { imagePhoto } = routes.params as {
    imagePhoto: {
      path: string;
    };
  };

  return (
    <S.Container>
      <Header />
      <S.PhotoContainer>
        <S.ImageWrapper>
          <S.ImagePhoto
            source={{
              uri: imagePhoto.path,
            }}
            resizeMode="cover"
          />
        </S.ImageWrapper>
      </S.PhotoContainer>
    </S.Container>
  );
};
