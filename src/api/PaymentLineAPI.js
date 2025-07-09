import { PaymentLine } from '../models/PaymentLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaymentLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaymentLine', PaymentLine); 
    }
}
