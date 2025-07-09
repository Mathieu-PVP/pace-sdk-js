import { CustomerType } from '../models/CustomerType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerType', CustomerType); 
    }
}
