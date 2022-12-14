type Action = {
  type: string;
  payload: {
    idGallery: string;
    idImage: string;
    title: string;
    desc: string;
    path: string;
  };
};

type Image = {
  id: string;
  title: string;
  desc: string;
  path: string;
};

export type Gallery = {
  id: string;
  title: string;
  images: Image[];
};

type Galleries = {
  galleries: Gallery[];
};

const initialState: Galleries = {
  galleries: [
    {
      id: '1',
      title: 'Landscape',
      images: [
        {
          id: '1',
          title: 'Imagem 1',
          desc: '',
          path: 'https://i1.sndcdn.com/artworks-ndymBJBgSAnzydyv-wgX77A-t500x500.jpg',
        },
        {
          id: '2',
          title: 'Imagem 2',
          desc: '',
          path: 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg',
        },
      ],
    },
    {
      id: '2',
      title: 'Anime',
      images: [],
    },
    {
      id: '3',
      title: 'Animals',
      images: [],
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
            gallery.images.push({
              id: action.payload.idImage,
              title: action.payload.title,
              desc: action.payload.desc,
              path: action.payload.path,
            });
          }

          return gallery;
        }),
      });
    default:
      return state;
  }
}
