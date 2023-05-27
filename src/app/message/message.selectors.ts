import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './message.models';

export const selectMessageState = createFeatureSelector<MessageState>('message');

export const selectMesage = createSelector(
    selectMessageState,
    (state: MessageState) => state.message
);