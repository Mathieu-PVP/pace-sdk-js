import { EserviceSetup } from '../models/EserviceSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EserviceSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EserviceSetup', EserviceSetup); 
    }
}
