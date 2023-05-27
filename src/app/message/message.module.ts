import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MessageComponent } from './messageComponent/message.component';
import { MessageService } from './message.service';
import * as fromMessage from './message.reducer';

@NgModule({
    declarations: [
        MessageComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromMessage.messageFeatureKey, fromMessage.messageReducer)
    ],
    exports: [
        MessageComponent
    ]
})
export class MessageModule {
    static forRoot(): ModuleWithProviders<MessageModule> {
        return {
            ngModule: MessageModule,
            providers: [
                MessageService
            ]
        }
    }
}