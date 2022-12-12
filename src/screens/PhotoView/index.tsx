import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Header } from '../../componnets/Header';
import theme from '../../styles/theme';

import * as S from './styles';

export const PhotoView = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const route = useRoute();
  const { imagePath } = route.params as { imagePath: string };

  console.log(imagePath);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = e.scale;
      focalX.value = e.focalX;
      focalY.value = e.focalY;
    })
    .onEnd((event) => {
      scale.value = withTiming(1);
    });

  const rAnimatedScale = useAnimatedStyle(() => ({
    transform: [
      { translateX: focalX.value },
      { translateY: focalY.value },
      { translateX: -theme.metrics.screenWidth / 2 },
      { translateY: -theme.metrics.screenHeight / 2 },
      { scale: scale.value },
      { translateX: -focalX.value },
      { translateY: -focalY.value },
      { translateX: theme.metrics.screenWidth / 2 },
      { translateY: theme.metrics.screenHeight / 2 },
    ],
  }));
  return (
    <S.Container>
      <Header />
      <GestureDetector gesture={pinchGesture}>
        <S.WrapperContent>
          <S.WrapperImage>
            <S.ImageView
              source={{
                uri: imagePath,
              }}
              style={rAnimatedScale}
            />
          </S.WrapperImage>
        </S.WrapperContent>
      </GestureDetector>
    </S.Container>
  );
};
