import {
  createReducer,
  on
} from '@ngrx/store';

import { AuthState } from './auth.models';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export const initialState: AuthState = {
  username: null,
  token: null,
  error: null,
  status: 'pending'
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state) => {
      return {
        ...state,
        status: 'loading'
      };
    }
  ),
  on(
    AuthActions.apiLoginSuccess,
    (state, action) => {
      console.log('action', action);
      return {
        ...state,
        username: action.username,
        token: action.token,
        error: null,
        status: 'success'
      };
    }
  ),
  on(
    AuthActions.apiLoginFailure,
    (state, action) => {
      return {
        ...state,
        username: null,
        token: null,
        error: action.error,
        status: 'error'
      };
    }
  ),
  on(
    AuthActions.logout,
    (state) => {
      return {
        ...state,
        username: null,
        token: null,
        error: null,
        status: 'pending'
      };
    }
  )
);
