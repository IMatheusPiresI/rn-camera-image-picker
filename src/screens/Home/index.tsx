import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import LikePhoto from '../../assets/animations/like-photo.json';

import * as S from './styles';

export const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = (route: 'Camera' | 'Gallery') => {
    navigation.navigate(route);
  };
  return (
    <S.Container testID="home_screen">
      <S.Title>
        Wellcome{'\n'}
        To{'\n'}
        CamCropper
      </S.Title>
      <S.WrapperAnimation>
        <LottieView source={LikePhoto} autoPlay loop speed={0.5} />
      </S.WrapperAnimation>
      <S.ContainerOptions>
        <S.ButtonOpacity onPress={() => handleNavigation('Camera')}>
          <S.TitleButton>Take a Pickture</S.TitleButton>
        </S.ButtonOpacity>
        <S.ButtonOpacity onPress={() => handleNavigation('Gallery')}>
          <S.TitleButton>My Gallery</S.TitleButton>
        </S.ButtonOpacity>
        <S.ButtonOpacity>
          <S.TitleButton>Liked</S.TitleButton>
        </S.ButtonOpacity>
      </S.ContainerOptions>
    </S.Container>
  );
};
