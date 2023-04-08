import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart-component/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartService } from './cart.service';

@NgModule({
    declarations: [
        CartComponent,
        CartProductComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        // RouterModule.forChild([
        //     { path: 'cart', component: CartComponent },
        // ]),
        // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
        // EffectsModule.forFeature([AuthEffects])
    ]
})
export class CartModule {
    static forRoot(): ModuleWithProviders<CartModule> {
        return {
            ngModule: CartModule,
            providers: [
                CartService
            ]
        }
    }
}