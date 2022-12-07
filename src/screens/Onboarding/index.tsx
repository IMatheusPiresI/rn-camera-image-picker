import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import Crop from '../../assets/animations/crop.json';
import Telephone from '../../assets/animations/telephone.json';
import Gallery from '../../assets/animations/gallery.json';

import * as S from './styles';
import { PageOnboarding } from './_components/PageOnboarding';

export const Onboarding = () => {
  const rAnimatedScroll = useSharedValue(0);
  const pages = [
    {
      id: '1',
      title: 'Select',
      animation: Gallery,
      autoPlay: true,
      desc: 'Select an image from your gallery to be able to perform cropping, rotation or zoom.',
    },
    {
      id: '2',
      title: 'Crop',
      animation: Crop,
      desc: 'Select an image from the gallery or take a photo to be able to crop and edit',
    },
    {
      id: '3',
      title: 'Gallery',
      animation: Telephone,
      desc: 'Upload image to your selected type and have your own photo gallery grouped by type.',
    },
  ];

  const handleScroll = (
    scrollEvent: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    rAnimatedScroll.value = scrollEvent.nativeEvent.contentOffset.x;
  };

  return (
    <S.Container>
      <S.OnboardingPages
        data={pages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PageOnboarding
            key={item.id}
            title={item.title}
            description={item.desc}
            animation={item.animation}
            autoPlay={item.autoPlay}
          />
        )}
        onScroll={(event) => handleScroll(event)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <S.WrapperInfo>
        <S.WrapperDots />
        <S.WrapperActionButtons>
          <S.ButtonOpacity>
            <S.TitleButtonOpacity>Skip</S.TitleButtonOpacity>
          </S.ButtonOpacity>
          <S.ButtonOpacity>
            <S.TitleButtonOpacity>Next</S.TitleButtonOpacity>
          </S.ButtonOpacity>
        </S.WrapperActionButtons>
      </S.WrapperInfo>
    </S.Container>
  );
};
