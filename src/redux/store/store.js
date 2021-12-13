import { combineReducers } from 'redux';
import contactsReduser from '../contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'items',
  storage,
};

const rootReduser = combineReducers({
  contacts: contactsReduser,
});


  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReduser),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

 export default store;