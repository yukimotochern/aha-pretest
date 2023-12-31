import { configureStore } from '@reduxjs/toolkit';
import { authSliceReducer } from './auth.slice';
import { userProfileReducer } from './userProfile.slice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    userProfile: userProfileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;
