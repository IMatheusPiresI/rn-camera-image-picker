import React, { useMemo } from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import Landscape from '../../assets/animations/landscape.json';
import Anime from '../../assets/animations/anime.json';
import Animals from '../../assets/animations/animals.json';
import Sports from '../../assets/animations/sports.json';
import Trips from '../../assets/animations/trips.json';
import Others from '../../assets/animations/others.json';
import { Gallery } from '../../store/modules/gallery/reducer';

import * as S from './styles';

type Props = {
  title: string;
  gallery: Gallery;
};

export const CardGallery: React.FC<Props> = ({ title, gallery }) => {
  const navigation = useNavigation();

  const lottieAnimation: AnimationObject = useMemo(() => {
    switch (title) {
      case 'Landscape':
        return Landscape;
      case 'Anime':
        return Anime;
      case 'Animals':
        return Animals;
      case 'Sports':
        return Sports;
      case 'Trips':
        return Trips;
      default:
        return Others;
    }
  }, [title]);

  const lastImageGallery = useMemo(() => {
    if (gallery.images.length > 0) {
      const totalImages = gallery.images.length;
      const lastImage = gallery.images[totalImages - 1];

      return lastImage.path;
    }

    return undefined;
  }, [gallery.images]);

  const handleGoGalleryPhotos = () => {
    navigation.navigate('GalleryPhotos', {
      gallery,
    });
  };

  return (
    <S.Container onPress={handleGoGalleryPhotos}>
      <S.LastImage
        source={{
          uri: lastImageGallery,
        }}
        resizeMode="cover"
      />
      {lastImageGallery && <S.ShadowWrapper />}
      <S.BoxRoundAnimation>
        <LottieView source={lottieAnimation} loop autoPlay />
      </S.BoxRoundAnimation>
    </S.Container>
  );
};
