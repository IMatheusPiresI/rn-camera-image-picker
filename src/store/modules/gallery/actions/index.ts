type Image = {
  idGallery: string;
  idImage: string;
  title: string;
  desc: string;
  path: string;
};

export function AddPhoto(payload: Image) {
  return {
    type: 'ADD_PHOTO',
    payload,
  };
}
