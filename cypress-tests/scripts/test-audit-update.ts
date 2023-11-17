// import config from 'config';
const config = require('config');

import { Config } from './types';

const projectConfig: Config = config.get('config');

main().catch((e) => {
    console.log(e);
    process.exit(1);
});

async function main() {
    console.log('scrip runnin');
}
