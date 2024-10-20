import { configureStore } from '@reduxjs/toolkit';
import { authApi, cardsApi } from '@/shared/api';
import { rootReducer } from '@/shared/lib/redux';
import { router } from './router';

export const extraArgument = {
  router,
};

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(
      authApi.middleware,
      cardsApi.middleware,
    ),
});
