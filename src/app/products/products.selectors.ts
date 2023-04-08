import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.models';
import { AppState } from '../app.state';

// export const selectProducts = (state: AppState) => state.products;
export const selectProducts = createFeatureSelector<ProductsState>('products');

export const selectProductsList = createSelector(
    selectProducts,
    (state: ProductsState) => state.products
);

export const selectSelectedProductId = createSelector(
    selectProducts,
    (state: ProductsState) => state.selectedProductId
)