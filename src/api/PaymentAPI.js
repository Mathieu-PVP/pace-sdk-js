import { Payment } from '../models/Payment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaymentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Payment', Payment); 
    }
}
