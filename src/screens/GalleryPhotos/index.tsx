/* eslint-disable react/no-unescaped-entities */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import LottieView from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../components/Header';
import Empty from '../../assets/animations/empty.json';
import { LongPressImage } from '../../components/LogPressImage';
import { ModalDelete } from '../../components/Modal/ModalDelete';
import { deletePhoto } from '../../store/modules/gallery/actions';
import { RootState } from '../../store';
import { Image } from '../../store/modules/gallery/reducer';

import * as S from './styles';

export const GalleryPhotos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const galleries = useSelector((state: RootState) => state.photos.galleries);

  const { id } = route.params as { id: string };

  const gallery = useMemo(
    () => galleries.find((stateGallery) => stateGallery.id === id),
    [galleries, id],
  );

  const handleAddPhoto = () => {
    navigation.navigate('Camera');
  };
  const handleOpenModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
    setSelectedImages([]);
  };

  const handleSelectedImage = (image: Image) => {
    setSelectedImages((state) => [...state, image]);
  };

  const handleUnSelectImage = (image: Image) => {
    setSelectedImages((state) =>
      state.filter((stateImage) => stateImage.id !== image.id),
    );
  };

  const handleDeleteImages = () => {
    if (gallery) {
      selectedImages.forEach((image) => {
        dispatch(
          deletePhoto({
            idGallery: gallery?.id,
            image: image,
          }),
        );
      });
    }
    setShowModalDelete(false);
  };

  return (
    <S.Container testID="gallery_photos">
      <Header
        title={gallery?.title}
        iconRight={
          <S.WrapperActionsButtons>
            {selectedImages.length > 0 ? (
              <S.ButtonDelete onPress={handleOpenModalDelete}>
                <MaterialIcons name="delete" size={22} color="white" />
              </S.ButtonDelete>
            ) : (
              <S.ButtonCamera onPress={handleAddPhoto} testID="add_photo">
                <MaterialIcons
                  name="add-photo-alternate"
                  size={22}
                  color="white"
                />
              </S.ButtonCamera>
            )}
          </S.WrapperActionsButtons>
        }
      />
      <S.WrapperImages>
        <S.ListImages
          data={gallery?.images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LongPressImage
              imageData={item}
              isSelecting={selectedImages.length > 0}
              selectedImages={selectedImages}
              selectImage={handleSelectedImage}
              unSelectImage={handleUnSelectImage}
            />
          )}
          numColumns={3}
          ListEmptyComponent={() => (
            <S.EmptyWrapper>
              <S.WrapperMessage>
                <S.WrapperAnimation>
                  <LottieView source={Empty} loop autoPlay />
                </S.WrapperAnimation>

                <S.EmptyMessage>
                  It looks like it's empty. {'\n'}
                  Upload an image to view it in your gallery.
                </S.EmptyMessage>
              </S.WrapperMessage>
            </S.EmptyWrapper>
          )}
        />
      </S.WrapperImages>
      <ModalDelete
        isVisible={showModalDelete}
        handleClose={handleCloseModalDelete}
        handleDelete={handleDeleteImages}
      />
    </S.Container>
  );
};
