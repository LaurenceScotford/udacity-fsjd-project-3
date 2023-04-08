import { createAction, props } from '@ngrx/store';
import { CartItem } from '../cart/cart.models';
import { Product } from './products.models';

const key = '[products]';

export const loadProducts = createAction(`${key} load Products`);

export const productsLoaded = createAction(
    `${key} Products Loaded`,
    props<{
        products: Product[]
    }>()
);

export const selectProduct = createAction(
    `${key} Select Product`,
    props<{
        selectedProductId: string
    }>()
);

export const addProductToCart = createAction(
    `${key} Add Product To Cart`,
    props<{
        cartItem: CartItem
    }>()
);