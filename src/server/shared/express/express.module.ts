import { NgModule, OpaqueToken } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import * as routingController from 'routing-controllers';
import * as ng2ExpressEngine from 'angular2-express-engine';

export const ExpressToken = new OpaqueToken('express');
export const CompressionToken = new OpaqueToken('compression');
export const RoutingControllerToken = new OpaqueToken('routing-controller');
export const Ng2ExpressEngineToken = new OpaqueToken('angular2-express-engine');

export type Express = typeof express;
export type Compression = typeof compression;
export type RoutingController = typeof routingController;
export type Ng2ExpressEngine = typeof ng2ExpressEngine;

export const EXPRESS_PROVIDERS = [
    { provide: Ng2ExpressEngineToken, useValue: ng2ExpressEngine },
    { provide: RoutingControllerToken, useValue: routingController },
    { provide: CompressionToken, useValue: compression },
    { provide: ExpressToken, useValue: express },
];
@NgModule({
    providers: [
        ...EXPRESS_PROVIDERS,
    ],
})
export class ExpressModule { }

