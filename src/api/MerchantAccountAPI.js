import { MerchantAccount } from '../models/MerchantAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MerchantAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MerchantAccount', MerchantAccount); 
    }
}
