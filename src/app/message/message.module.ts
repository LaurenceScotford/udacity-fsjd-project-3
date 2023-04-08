import { ModuleWithProviders, NgModule } from '@angular/core';
import { MessageComponent } from './messageComponent/message.component';
import { MessageService } from './message.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MessageComponent
    ],
    imports: [
        CommonModule
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