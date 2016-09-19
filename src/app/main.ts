import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { platformUniversalDynamic } from 'angular2-universal/browser/browser';

import { AppModule } from './app.module';

function main() {
    platformUniversalDynamic().bootstrapModule(AppModule).then(null, console.log.bind(console));
}

main();
