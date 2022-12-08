import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import metrics from '../../styles/theme/metrics';
import { pages } from '../../mocks/pages';

import * as S from './styles';
import { PageOnboarding } from './_components/PageOnboarding';
import { Paginator } from './_components/Paginator';
import { StackActions, useNavigation } from '@react-navigation/native';

export const Onboarding = () => {
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(false);
  const rAnimatedScroll = useSharedValue(0);
  const scrollRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const activeIndex = useDerivedValue(() =>
    Math.round(rAnimatedScroll.value / metrics.screenWidth),
  );

  const currentAnimationValue = useDerivedValue(
    () => rAnimatedScroll.value / metrics.screenWidth,
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
    const nextPage = activeIndex.value + 1;
    const offset = nextPage * metrics.screenWidth;
    scrollRef.current?.scrollToOffset({ offset: offset });
    handleDisableButtonOnFinishPages(nextPage);
  };

  const handleDisableButtonOnFinishPages = (currentPage: number) => {
    const totalPages = pages.length;

    if (currentPage === totalPages) {
      return setDisabledNextButton(true);
    }
    setDisabledNextButton(false);
  };

  const handleGoHome = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  const rAnimationActionButtons = useAnimatedStyle(() => ({
    bottom: interpolate(
      currentAnimationValue.value,
      [0, 1, 1.6, 2],
      [0, 0, 30, -80],
    ),
    opacity: interpolate(
      currentAnimationValue.value,
      [0, 1, 1.6, 2],
      [1, 1, 0, 0],
    ),

    zIndex: interpolate(currentAnimationValue.value, [0, 1, 2], [5, 5, 0]),
  }));

  const rAnimatedStartedAppButton = useAnimatedStyle(() => ({
    bottom: interpolate(
      currentAnimationValue.value,
      [0, 1, 1.6, 2],
      [-150, -150, 30, 0],
    ),
    opacity: interpolate(
      currentAnimationValue.value,
      [0, 1, 1.6, 2],
      [0, 0, 0, 1],
    ),
    zIndex: interpolate(currentAnimationValue.value, [0, 1, 2], [0, 0, 5]),
  }));

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
            activeIndex={activeIndex.value}
            indexAnimation={item.indexAnimation}
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
        <S.WrapperDots>
          <Paginator activeIndex={activeIndex} qtyPages={pages.length} />
        </S.WrapperDots>
        <S.WrapperActionButtons style={rAnimationActionButtons}>
          <S.ActionButton onPress={handleGoHome}>
            <S.TitleButtonOpacity>Skip</S.TitleButtonOpacity>
          </S.ActionButton>
          <S.ActionButton
            onPress={handleNextPage}
            disabled={disabledNextButton}
          >
            <S.TitleButtonOpacity>Next</S.TitleButtonOpacity>
          </S.ActionButton>
        </S.WrapperActionButtons>
        <S.ContainerStartedButton>
          <S.WrapperButtonStart style={rAnimatedStartedAppButton}>
            <S.ButtonStart onPress={handleGoHome}>
              <S.TitleButtonOpacity>Get Started</S.TitleButtonOpacity>
            </S.ButtonStart>
          </S.WrapperButtonStart>
        </S.ContainerStartedButton>
      </S.WrapperInfo>
    </S.Container>
  );
};
