import { APSetup } from '../models/APSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class APSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'APSetup', APSetup); 
    }
}
