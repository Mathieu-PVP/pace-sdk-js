import { BillPayment } from '../models/BillPayment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillPaymentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillPayment', BillPayment); 
    }
}
