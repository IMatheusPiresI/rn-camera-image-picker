/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {
  useCameraDevices,
  Camera as RNCamera,
} from 'react-native-vision-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../componnets/Header';

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

  const handleOpenCropper = (imagePath: string) => {
    console.log('aqui');
    console.log(imagePath);
    ImagePicker.openCropper({
      mediaType: 'photo',
      path: imagePath,
      freeStyleCropEnabled: true,
      ...configCropper,
    })
      .then((imageCropped) => {
        console.log('aqui');
        navigation.navigate('PhotoTypeSeparate', {
          imagePhoto: {
            path: imageCropped.path,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePhoto();

    if (photo) {
      console.log(photo);
      handleOpenCropper(`file://${photo.path}`);
    }
  };

  const handlePickImageGallery = () => {
    ImagePicker.openPicker({
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
          <ActivityIndicator size="large" color={theme.colors.shape} />
        </S.LoadingWrapper>
      );
    } else {
      return (
        <S.CameraWrapper>
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
            <MaterialIcons name="flash-on" size={28} color="white" />
          </S.ButtonOpacity>
        }
      />
      <S.ContainerCamera>{renderCamera()}</S.ContainerCamera>
      <S.Footer>
        <S.FooterWrapperButtons>
          <S.ButtonIcon onPress={handlePickImageGallery}>
            <MaterialIcons name="collections" size={30} color="white" />
          </S.ButtonIcon>
          <S.ButtonCamera onPress={handleTakePicture} />
          <S.ButtonIcon onPress={toogleCameraVision}>
            <MaterialIcons name="camera-front" size={30} color="white" />
          </S.ButtonIcon>
        </S.FooterWrapperButtons>
      </S.Footer>
    </S.Container>
  );
};
