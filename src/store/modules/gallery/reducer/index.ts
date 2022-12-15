type Action = {
  type: string;
  payload: {
    idGallery: string;
    image: Image;
    images: Image[];
  };
};

export type Image = {
  id: string;
  title: string;
  desc: string;
  path: string;
};

export type Gallery = {
  id: string;
  title: string;
  images: Image[] | null;
};

type Galleries = {
  galleries: Gallery[];
};

const initialState: Galleries = {
  galleries: [
    {
      id: '1',
      title: 'Landscape',
      images: [],
    },
    {
      id: '2',
      title: 'Anime',
      images: [],
    },
    {
      id: '3',
      title: 'Animals',
      images: [
        {
          id: '1',
          title: '',
          desc: '',
          path: 'https://img.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg',
        },
        {
          id: '2',
          title: '',
          desc: '',
          path: 'https://img.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg',
        },
        {
          id: '3',
          title: '',
          desc: '',
          path: 'https://img.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg',
        },
        {
          id: '4',
          title: '',
          desc: '',
          path: 'https://img.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg',
        },
      ],
    },
    {
      id: '4',
      title: 'Sports',
      images: [],
    },
    {
      id: '5',
      title: 'Trips',
      images: [],
    },
    {
      id: '6',
      title: 'Others',
      images: [],
    },
  ],
};

export default function photos(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_PHOTO':
      return (state = {
        galleries: state.galleries.map((gallery) => {
          if (gallery.id === action.payload.idGallery) {
            gallery.images?.push({
              id: action.payload.image.id,
              title: action.payload.image.title,
              desc: action.payload.image.desc,
              path: action.payload.image.path,
            });
          }

          return gallery;
        }),
      });

    case 'DELETE_PHOTO':
      console.log('entrei');
      return (state = {
        galleries: state.galleries.map((gallery) => {
          if (gallery.id === action.payload.idGallery) {
            const images = gallery.images?.filter(
              (image) => image.id !== action.payload.image.id,
            );
            return {
              ...gallery,
              images: images ?? [],
            };
          }

          return gallery;
        }),
      });

    default:
      return state;
  }
}
