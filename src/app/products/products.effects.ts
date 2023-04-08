import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import * as fromActions from './products.actions';

import { ProductListService } from "./product-list.service";
import { Action } from '@ngrx/store';
import { Product } from './products.models';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productsListService: ProductListService
    ) { }

    getProducts$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.loadProducts),
        exhaustMap(() => this.productsListService.getProducts()
            .pipe(
                tap(products => console.log(products)),
                map(products => ({
                    type: '[products] Products Loaded',
                    payload: { products: products }
                })),
                catchError(() => EMPTY)
            )
        )
    )
    );
}