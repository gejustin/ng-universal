import { NgModule } from '@angular/core';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';

@NgModule({
    providers: [
        StatusService,
        StatusController,
    ],
})
export class StatusModule { }
