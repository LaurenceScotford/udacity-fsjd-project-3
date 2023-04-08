import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderService } from './order.service';


@NgModule({
    declarations: [
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        // RouterModule.forChild([
        //     { path: 'confirm-order/:id', component: ConfirmationComponent }
        // ]),
        // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
        // EffectsModule.forFeature([AuthEffects])
    ]
})
export class OrdersModule {
    static forRoot(): ModuleWithProviders<OrdersModule> {
        return {
            ngModule: OrdersModule,
            providers: [
                OrderService
            ]
        }
    }
}