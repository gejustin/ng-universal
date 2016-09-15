import {
    Request,
    Response,
    NextFunction,
} from 'express';

import { JsonController, Get } from 'routing-controllers';
import { Injectable } from '@angular/core';
import { StatusService } from './status.service';

@JsonController()
@Injectable()
export class StatusController {

    constructor(private statusSvc: StatusService) { }

    @Get('/status')
    public getStatus(req: Request, res: Response, next: NextFunction) {
        return this.statusSvc.getStatus();
    }

}
