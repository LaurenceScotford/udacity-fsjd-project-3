import { createAction, props } from '@ngrx/store';

const key = '[message]';

export const setMessage = createAction(
    `${key} setMessage`,
    props<{
        message: string,
        messageType: 'confirm' | 'warn'
    }>()
);

