import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';

import Crop from '../../assets/animations/crop.json';
import Telephone from '../../assets/animations/telephone.json';
import Gallery from '../../assets/animations/gallery.json';
import metrics from '../../styles/theme/metrics';

import * as S from './styles';
import { PageOnboarding } from './_components/PageOnboarding';

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

export const Onboarding = () => {
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(false);
  const rAnimatedScroll = useSharedValue(0);
  const scrollRef = useRef<FlatList>(null);

  const activeIndex = useDerivedValue(() =>
    Math.round(rAnimatedScroll.value / metrics.screenWidth),
  );

  const handleScroll = (
    scrollEvent: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    rAnimatedScroll.value = scrollEvent.nativeEvent.contentOffset.x;
  };

  const disableActionsOnFinishScrollPages = () => {
    handleDisableButtonOnFinishPages(activeIndex.value);
  };

  const handleNextPage = () => {
    console.log('ativei');
    const nextPage = activeIndex.value + 1;
    const offset = nextPage * metrics.screenWidth;
    scrollRef.current?.scrollToOffset({ offset: offset });
    handleDisableButtonOnFinishPages(nextPage);
  };

  const handleDisableButtonOnFinishPages = (currentPage: number) => {
    const totalPages = pages.length - 1;

    if (currentPage === totalPages) {
      return setDisabledNextButton(true);
    }
    setDisabledNextButton(false);
  };

  return (
    <S.Container>
      <S.OnboardingPages
        data={pages}
        ref={scrollRef}
        onMomentumScrollEnd={disableActionsOnFinishScrollPages}
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
        bounces={false}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <S.WrapperInfo>
        <S.WrapperDots />
        <S.WrapperActionButtons>
          <S.ButtonOpacity>
            <S.TitleButtonOpacity>Skip</S.TitleButtonOpacity>
          </S.ButtonOpacity>
          <S.ButtonOpacity
            onPress={handleNextPage}
            disabled={disabledNextButton}
          >
            <S.TitleButtonOpacity>Next</S.TitleButtonOpacity>
          </S.ButtonOpacity>
        </S.WrapperActionButtons>
      </S.WrapperInfo>
    </S.Container>
  );
};
