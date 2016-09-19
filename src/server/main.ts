import 'reflect-metadata';
import 'zone.js';

import { platformNodeDynamic } from 'angular2-universal';

import { MainModule } from './main.module';

function main() {
    platformNodeDynamic().bootstrapModule(MainModule).then(null, console.log.bind(console));
}

main();
