require('reflect-metadata');
require('zone.js');
import { platformNodeDynamic } from 'angular2-universal';

import { AppModule } from './app.module';

function main() {
    platformNodeDynamic().serializeModule(AppModule).then(null, console.log.bind(console));
}

main();
