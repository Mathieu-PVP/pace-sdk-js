import { PurchasingAuthorization } from '../models/PurchasingAuthorization.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchasingAuthorizationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchasingAuthorization', PurchasingAuthorization); 
    }
}
