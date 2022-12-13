import { AnimationObject } from 'lottie-react-native';

import Landscape from '../assets/animations/landscape.json';
import Anime from '../assets/animations/anime.json';
import Animals from '../assets/animations/animals.json';
import Sports from '../assets/animations/sports.json';
import Trips from '../assets/animations/trips.json';
import Others from '../assets/animations/others.json';

export type PhotoType = {
  id: string;
  title: string;
  animation: AnimationObject;
};

export const photoTypes: PhotoType[] = [
  {
    id: '1',
    title: 'Landscape',
    animation: Landscape,
  },
  {
    id: '2',
    title: 'Anime',
    animation: Anime,
  },
  {
    id: '3',
    title: 'Animals',
    animation: Animals,
  },
  {
    id: '4',
    title: 'Sports',
    animation: Sports,
  },
  {
    id: '5',
    title: 'Trips',
    animation: Trips,
  },
  {
    id: '6',
    title: 'Others',
    animation: Others,
  },
];
