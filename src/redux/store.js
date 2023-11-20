import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CarsReducer } from './CarSlice';
import { favoriteCarsReducer } from './FavoriteCarSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cars', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, CarsReducer);

export const store = configureStore({
    reducer: {
        cars: persistedReducer,
        favorites: favoriteCarsReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);