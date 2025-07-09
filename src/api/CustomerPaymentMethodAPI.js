import { CustomerPaymentMethod } from '../models/CustomerPaymentMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerPaymentMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerPaymentMethod', CustomerPaymentMethod); 
    }
}
