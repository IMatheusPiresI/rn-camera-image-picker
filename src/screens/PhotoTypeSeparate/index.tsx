import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { Header } from '../../componnets/Header';

import * as S from './styles';

export const PhotoTypeSeparate = () => {
  const routes = useRoute();
  const navigation = useNavigation();

  const { imagePhoto } = routes.params as {
    imagePhoto: {
      path: string;
    };
  };

  const handlePhotoView = () => {
    navigation.navigate('PhotoView', {
      imagePath: imagePhoto.path,
    });
  };
  return (
    <S.Container>
      <Header />
      <S.PhotoContainer>
        <S.ButtonImageWrapper onPress={handlePhotoView}>
          <S.ImagePhoto
            source={{
              uri: imagePhoto.path,
            }}
            resizeMode="cover"
          />
        </S.ButtonImageWrapper>
      </S.PhotoContainer>
    </S.Container>
  );
};
