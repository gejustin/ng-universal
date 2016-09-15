import {
    Request,
    Response,
} from 'express';

import { Controller, Get, Req, Res } from 'routing-controllers';

@Controller()
export class AppController {

    @Get('/')
    public renderIndex( @Req() request: Request, @Res() response: Response) {
        response.render('index', { request, response });
    }

}
