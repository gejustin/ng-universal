import { NgModule } from '@angular/core';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';

export const STATUS_PROVIDERS = [
    StatusService,
    StatusController,
];

@NgModule({
    providers: [
        ...STATUS_PROVIDERS,
    ],
})
export class StatusModule { }

