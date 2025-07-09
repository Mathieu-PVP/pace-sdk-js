import { BillPaymentBatch } from '../models/BillPaymentBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillPaymentBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillPaymentBatch', BillPaymentBatch); 
    }
}
