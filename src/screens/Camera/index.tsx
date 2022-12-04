import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {
  useCameraDevices,
  Camera as RNCamera,
} from 'react-native-vision-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';

import * as S from './styles';

export const Camera = () => {
  const [switchCamera, setSwitchCamera] = useState<'back' | 'front'>('back');
  const [activeFlash, setActiveFlash] = useState<'on' | 'off'>('off');
  const cameraRef = useRef<RNCamera>(null);
  const devices = useCameraDevices();
  const device = devices[switchCamera];

  const toogleCameraVision = () => {
    setSwitchCamera((position) => (position === 'back' ? 'front' : 'back'));
  };

  const toogleActiveFlash = () => {
    setActiveFlash((position) => (position === 'on' ? 'off' : 'on'));
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePhoto();

    console.log(photo?.path);
    if (photo) {
      ImagePicker.openCropper({
        mediaType: 'photo',
        path: `file://${photo.path}`,
      })
        .then((imageCropped) => {
          console.log(imageCropped);
        })
        .catch(() => null);
    }
  };

  const handlePickImageGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageMaxHeight: 900,
      compressImageMaxWidth: 900,
    })
      .then((image) => {
        console.log(image);

        ImagePicker.openCropper({
          mediaType: 'photo',
          path: image.path,
          width: 500,
          height: 500,
        })
          .then((imageCropped) => {
            console.log(imageCropped);
          })
          .catch(() => null);
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
      return <ActivityIndicator size="large" />;
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
      <S.Header>
        <S.ButtonOpacity>
          <MaterialIcons name="arrow-back" size={28} color="white" />
        </S.ButtonOpacity>
        <S.ButtonOpacity onPress={toogleActiveFlash}>
          <MaterialIcons name="flash-on" size={28} color="white" />
        </S.ButtonOpacity>
      </S.Header>
      {renderCamera()}
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
