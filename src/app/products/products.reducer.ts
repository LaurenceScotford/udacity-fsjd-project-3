import {
    createReducer,
    on
} from '@ngrx/store';

import { ProductsState } from './products.models';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export const initialState: ProductsState = {
    products: [],
    selectedProductId: null,
    status: 'pending'
};

export const productsReducer = createReducer(
    initialState,
    on(
        ProductsActions.loadProducts,
        (state, _action) => {
            return {
                ...state,
                status: 'loading'
            }
        }
    ),
    on(
        ProductsActions.productsLoaded,
        (state, action) => {
            console.log(action.products);
            return {
                ...state,
                products: [...action.products],
                status: 'success'
            }
        }
    ),
    on(
        ProductsActions.addProductToCart,
        (state, _action) => {
            return {
                ...state,
            };
        }
    ),
    on(
        ProductsActions.selectProduct,
        (state, action) => {
            return {
                ...state,
                selectedProductId: action.selectedProductId
            };
        }
    )
);
