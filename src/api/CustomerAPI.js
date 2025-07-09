import { Customer } from '../models/Customer.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Customer', Customer); 
    }
}
