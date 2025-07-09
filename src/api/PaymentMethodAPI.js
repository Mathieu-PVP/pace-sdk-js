import { PaymentMethod } from '../models/PaymentMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaymentMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaymentMethod', PaymentMethod); 
    }
}
