import { Gallery } from '../store/modules/gallery/reducer';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SplashScreen: undefined;
      Onboarding: undefined;
      Home: undefined;
      Camera: undefined;
      PhotoTypeSeparate: {
        imagePhoto: {
          path: string;
        };
      };
      PhotoView: { imagePath: string };
      Gallery: undefined;
      GalleryPhotos: { gallery: Gallery };
    }
  }
}
