import { UOMSetup } from '../models/UOMSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UOMSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UOMSetup', UOMSetup); 
    }
}
