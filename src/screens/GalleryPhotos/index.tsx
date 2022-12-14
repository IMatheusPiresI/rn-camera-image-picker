import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import { Header } from '../../components/Header';
import { Gallery } from '../../store/modules/gallery/reducer';

import * as S from './styles';

export const GalleryPhotos = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { gallery } = route.params as { gallery: Gallery };

  const handleViewImage = (path: string) => {
    navigation.navigate('PhotoView', {
      imagePath: path,
    });
  };

  return (
    <S.Container>
      <Header title={gallery.title} />
      <S.WrapperImages>
        <S.ListImages
          data={gallery.images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <S.ButtonImage onPress={() => handleViewImage(item.path)}>
              <S.CardImage
                source={{
                  uri: item.path,
                }}
              />
            </S.ButtonImage>
          )}
          numColumns={3}
        />
      </S.WrapperImages>
    </S.Container>
  );
};
