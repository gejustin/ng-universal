import {
    Request,
    Response,
} from 'express';

import {
    Controller,
    Get,
    Req,
    Res,
    Render,
} from 'routing-controllers';

import { AppModule } from './app.module';

@Controller()
export class AppController {

    @Get('/')
    @Render('index')
    public renderIndex( @Req() request: Request, @Res() response: Response) {
        return {
            time: true,
            req: request,
            res: response,
            ngModule: AppModule,
            originUrl: 'http://localhost:3000',
            preboot: { appRoot: 'app' },
        };
    }

}

