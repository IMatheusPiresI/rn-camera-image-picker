import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { Image } from '../../store/modules/gallery/reducer';

import * as S from './styles';

type Props = {
  imageData: Image;
  isSelecting: boolean;
  selectedImages: Image[];
  selectImage: (image: Image) => void;
  unSelectImage: (image: Image) => void;
};

export const LongPressImage: React.FC<Props> = ({
  imageData,
  isSelecting,
  selectedImages,
  selectImage,
  unSelectImage,
}) => {
  const selectedAnimate = useSharedValue(0);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleViewImage = () => {
    navigation.navigate('PhotoView', {
      imagePath: imageData.path,
    });
  };

  const isSelected = useMemo(() => {
    const selected = selectedImages.filter((item) => item.id === imageData.id);
    return selected.length > 0 ? true : false;
  }, [imageData.id, selectedImages]);

  const handleSelectImage = () => {
    selectImage(imageData);
  };

  const handleUnSelectImage = () => {
    unSelectImage(imageData);
  };

  const toogleTouchFunction = () => {
    if (isSelecting && isSelected) {
      handleUnSelectImage();
    } else if (isSelecting && !isSelected) {
      handleSelectImage();
    } else {
      handleViewImage();
    }
  };

  const onGesture = Gesture.LongPress()
    .minDuration(2000)
    .onStart(() => {
      runOnJS(selectImage)(imageData);
    });

  const rSelectedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      selectedAnimate.value,
      [0, 1],
      [theme.colors.shape, theme.colors.salmon],
    );

    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    if (isSelected) {
      selectedAnimate.value = withTiming(1, { duration: 800 });
      return;
    }
    selectedAnimate.value = withTiming(0, { duration: 800 });
  }, [isSelected, selectedAnimate]);

  return (
    <GestureDetector gesture={onGesture}>
      <S.ContainerSelected style={rSelectedStyle}>
        <S.ButtonImage onPress={toogleTouchFunction}>
          <S.CardImage
            source={{
              uri: imageData.path,
            }}
          />
        </S.ButtonImage>
      </S.ContainerSelected>
    </GestureDetector>
  );
};
