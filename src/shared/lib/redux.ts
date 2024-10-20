import {
  ThunkAction,
  UnknownAction,
  asyncThunkCreator,
  buildCreateSlice,
  combineSlices,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
// eslint-disable-next-line boundaries/entry-point, boundaries/element-types
import { extraArgument, store } from '@/app/store';
import { authApi, cardsApi } from '../api';

export const rootReducer = combineSlices(authApi, cardsApi);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppState = any;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
}>();

export type ExtraArgument = typeof extraArgument;

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
