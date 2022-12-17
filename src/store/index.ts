import { combineReducers, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import photos from './modules/gallery/reducer';

const persistConfig = {
  key: '@CamCrop:image',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  photos,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
