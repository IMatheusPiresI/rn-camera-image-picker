/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {
  useCameraDevices,
  Camera as RNCamera,
} from 'react-native-vision-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';

import * as S from './styles';
import { configCropper } from '../../config';

export const Camera = () => {
  const theme = useTheme();
  const [switchCamera, setSwitchCamera] = useState<'back' | 'front'>('back');
  const [activeFlash, setActiveFlash] = useState<'on' | 'off'>('off');
  const navigation = useNavigation();
  const cameraRef = useRef<RNCamera>(null);
  const devices = useCameraDevices();
  const device = devices[switchCamera];

  const toogleCameraVision = () => {
    setSwitchCamera((position) => (position === 'back' ? 'front' : 'back'));
  };

  const toogleActiveFlash = () => {
    setActiveFlash((position) => (position === 'on' ? 'off' : 'on'));
  };

  const handleOpenCropper = async (imagePath: string) => {
    const image = await ImagePicker.openCropper({
      mediaType: 'photo',
      path: imagePath,
      freeStyleCropEnabled: true,
      cropperChooseText: 'Salvar',
      ...configCropper,
    });

    navigation.dispatch(
      StackActions.replace('PhotoTypeSeparate', {
        imagePhoto: {
          path: image.path,
        },
      }),
    );
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePhoto();

    if (photo) {
      handleOpenCropper(`file://${photo.path}`);
    }
  };

  const handlePickImageGallery = async () => {
    await ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageMaxHeight: 900,
      compressImageMaxWidth: 900,
    })
      .then((image) => {
        handleOpenCropper(image.path);
      })
      .catch(() => null);
  };

  const requestCameraPermission = useCallback(async () => {
    const permission = await RNCamera.requestCameraPermission();

    if (permission === 'denied') await Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const renderCamera = () => {
    if (device === null || device === undefined) {
      return (
        <S.LoadingWrapper>
          <ActivityIndicator size="large" color={theme.colors.salmon} />
        </S.LoadingWrapper>
      );
    } else {
      return (
        <S.CameraWrapper testID="camera_screen">
          <RNCamera
            ref={cameraRef}
            device={device}
            isActive={true}
            photo={true}
            torch={activeFlash}
            style={{ flex: 1 }}
          />
        </S.CameraWrapper>
      );
    }
  };

  return (
    <S.Container>
      <Header
        iconRight={
          <S.ButtonOpacity onPress={toogleActiveFlash}>
            {activeFlash === 'on' ? (
              <MaterialIcons
                name="flash-on"
                size={28}
                color={theme.colors.salmon}
              />
            ) : (
              <MaterialIcons
                name="flash-off"
                size={28}
                color={theme.colors.salmon}
              />
            )}
          </S.ButtonOpacity>
        }
      />
      <S.ContainerCamera>{renderCamera()}</S.ContainerCamera>
      <S.Footer>
        <S.FooterWrapperButtons>
          <S.ButtonIcon onPress={handlePickImageGallery}>
            <MaterialIcons
              name="collections"
              size={30}
              color={theme.colors.shape}
            />
          </S.ButtonIcon>
          <S.ButtonCamera onPress={handleTakePicture} testID="take_picture">
            <MaterialIcons name="camera" size={55} color={theme.colors.shape} />
          </S.ButtonCamera>
          <S.ButtonIcon onPress={toogleCameraVision}>
            <MaterialIcons
              name="flip-camera-android"
              size={30}
              color={theme.colors.shape}
            />
          </S.ButtonIcon>
        </S.FooterWrapperButtons>
      </S.Footer>
    </S.Container>
  );
};
