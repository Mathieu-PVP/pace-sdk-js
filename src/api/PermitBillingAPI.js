import { PermitBilling } from '../models/PermitBilling.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PermitBillingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PermitBilling', PermitBilling); 
    }
}
