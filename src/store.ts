import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemslice';
import cartReducer from './cartslice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedItemReducer = persistReducer(persistConfig, itemReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    items: persistedItemReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
