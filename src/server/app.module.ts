import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import {
    MessageComponent,
    MessageService,
} from '../app/message';

import { AppComponent } from '../app/app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [
        UniversalModule,
    ],
    providers: [MessageService],
})
export class AppModule { }
