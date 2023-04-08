import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.models';

const key = '[cart]';

export const addProductToCart = createAction(
    `${key} removeProductFromCart`,
    props<{
        cartItem: CartItem
    }>()
);