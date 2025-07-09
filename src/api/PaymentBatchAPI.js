import { PaymentBatch } from '../models/PaymentBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaymentBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaymentBatch', PaymentBatch); 
    }
}
