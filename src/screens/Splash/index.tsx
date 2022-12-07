import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Extrapolate,
  withSequence,
  interpolate,
  Easing,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';

import Logo from '../../assets/images/logo.svg';

import * as S from './styles';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const rAnimate = useSharedValue(0);

  const startApp = useCallback(() => {
    navigation.dispatch(StackActions.replace('Onboarding'));
  }, [navigation]);

  const rImageTransition = useAnimatedStyle(() => ({
    opacity: 1,
    bottom: interpolate(
      rAnimate.value,
      [1, 3, 4, 5],
      [0, 65, 65, 45],
      Extrapolate.CLAMP,
    ),
    right: interpolate(
      rAnimate.value,
      [0, 1, 3, 4],
      [0, 95, 95, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const tTitleAnimate = useAnimatedStyle(() => ({
    opacity: interpolate(rAnimate.value, [0, 1], [0, 1], Extrapolate.CLAMP),
    top: interpolate(
      rAnimate.value,
      [1, 3, 4, 5],
      [0, 65, 65, 45],
      Extrapolate.CLAMP,
    ),
    left: interpolate(
      rAnimate.value,
      [0, 1, 3, 4],
      [0, 60, 60, 0],
      Extrapolate.CLAMP,
    ),
  }));

  useEffect(() => {
    rAnimate.value = withDelay(
      1000,
      withSequence(
        withTiming(1, { duration: 500, easing: Easing.ease }),
        withTiming(3, { duration: 500, easing: Easing.ease }),
        withTiming(4, { duration: 500, easing: Easing.ease }),
        withTiming(5, { duration: 500, easing: Easing.bounce }, () => {
          runOnJS(startApp)();
        }),
      ),
    );
  }, [rAnimate, startApp]);

  return (
    <S.Container>
      <S.AnimatedBox style={rImageTransition}>
        <Logo width={132} height={132} />
      </S.AnimatedBox>
      <S.BoxTitle>
        <S.Title style={tTitleAnimate}>CamCropper</S.Title>
      </S.BoxTitle>
    </S.Container>
  );
};
