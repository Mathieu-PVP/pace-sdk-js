import { CustomerStatus } from '../models/CustomerStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerStatus', CustomerStatus); 
    }
}
