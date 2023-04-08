import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

import { User } from "./auth.models";
import { AuthService } from "./auth.service";
import * as fromActions from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.login),
        exhaustMap((payload) => this.authService.login(payload.userData)
            .pipe(
                map(authToken => ({
                    type: '[auth] apiLoginSuccess', payload: {
                        username: payload.userData.username,
                        token: authToken
                    }
                })),
                catchError(() => EMPTY)
            )
        ))
    );
}

