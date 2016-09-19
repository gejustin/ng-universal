import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser/browser';

import {
    MessageComponent,
    MessageService,
} from './message';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, MessageComponent],
    imports: [
        UniversalModule,
    ],
    providers: [MessageService],
})
export class AppModule {

    public ngDoBootstrap() {
        console.log('strapped');
    }
}
