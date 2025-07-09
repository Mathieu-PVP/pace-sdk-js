import { JobBillingSetup } from '../models/JobBillingSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobBillingSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobBillingSetup', JobBillingSetup); 
    }
}
