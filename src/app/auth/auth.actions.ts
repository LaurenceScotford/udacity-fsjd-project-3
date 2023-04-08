import { createAction, props } from '@ngrx/store';
import { AuthToken, User } from './auth.models';

const key = '[auth]';

export const checkUserNameAvialability = createAction(
    `${key} checkUserNameAvialability`,
    props<{ username: string }>()
);

export const register = createAction(
    `${key} register`,
    props<{ userData: User }>()
);

export const login = createAction(
    `${key} login`,
    props<{ userData: User }>()
);

export const autoLogin = createAction(`${key} autoLogin`);


export const logout = createAction(`${key} logout`);

export const apiUsernameAvailable = createAction(`${key} apiUsernameAvailable`);
export const apiUsernameUnvailable = createAction(`${key} apiUsernameUnvailable`);

export const apiRegisterSuccess = createAction(`${key} apiRegisterSuccess`);
export const apiRegisterFailure = createAction(
    `${key} apiRegisterFailure`,
    props<{
        error: string
    }>()
);

export const apiLoginSuccess = createAction(
    `${key} apiLoginSuccess`,
    props<{
        username: string,
        token: AuthToken
    }>()
);
export const apiLoginFailure = createAction(
    `${key} apiLoginFailure`,
    props<{
        error: string
    }>()
);