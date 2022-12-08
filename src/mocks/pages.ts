import Crop from '../assets/animations/crop.json';
import Telephone from '../assets/animations/telephone.json';
import Gallery from '../assets/animations/gallery.json';

export const pages = [
  {
    id: '1',
    title: 'Select',
    animation: Gallery,
    desc: 'Select an image from your gallery to be able to perform cropping, rotation or zoom.',
  },
  {
    id: '2',
    title: 'Crop',
    animation: Crop,
    desc: 'Select an image from the gallery or take a photo to be able to crop and edit',
  },
  {
    id: '3',
    title: 'Gallery',
    animation: Telephone,
    desc: 'Upload image to your selected type and have your own photo gallery grouped by type.',
  },
];
