import { CRMSetup } from '../models/CRMSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CRMSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CRMSetup', CRMSetup); 
    }
}
