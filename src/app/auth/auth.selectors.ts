import { createSelector } from '@ngrx/store';

import { AuthState } from './auth.models';
import { AppState } from '../app.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectUser = createSelector(
    selectAuth,
    (state: AuthState) => state.user
);

export const selectToken = createSelector(
    selectAuth,
    (state: AuthState) => state.token
);

export const selectIsLoggedIn = createSelector(
    selectUser,
    selectToken,
    (user, token) => { return token !== null && user !== null; }
);