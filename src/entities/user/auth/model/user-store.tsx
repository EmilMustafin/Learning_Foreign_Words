import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { removeTokensFromStorage, setTokensIntoStorage } from '@/shared/lib/localStorage';
import { rootReducer } from '@/shared/lib/redux';
import { IUser } from './types';

interface UserState {
  user: IUser | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<IUser | null>) {
      if (action.payload === null) {
        state.user = null;
      } else if (action.payload.login === 'admin' && action.payload.password === 'admin') {
        setTokensIntoStorage(
          window.btoa(JSON.stringify(action.payload.login)) + window.btoa(action.payload.password),
        );
        state.user = {
          login: action.payload.login,
          password: action.payload.password,
        };
      }
    },
    signOut(state) {
      removeTokensFromStorage();
      state.user = null;
    },
  },
  selectors: {
    getUser: (state) => state.user,
    selectLoading: (state) => state.loading,
  },
}).injectInto(rootReducer);
