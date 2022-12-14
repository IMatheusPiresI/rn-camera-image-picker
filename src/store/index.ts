import { combineReducers, createStore } from 'redux';

import photos from './modules/gallery/reducer';

const rootReducer = combineReducers({
  photos,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export { store };
