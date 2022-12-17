import { Image } from '../reducer';

type AddPhoto = {
  idGallery: string;
  image: Image;
};

type DeleteImage = AddPhoto;

export function addPhoto(payload: AddPhoto) {
  return {
    type: 'ADD_PHOTO',
    payload,
  };
}

export function deletePhoto(payload: DeleteImage) {
  return {
    type: 'DELETE_PHOTO',
    payload,
  };
}
