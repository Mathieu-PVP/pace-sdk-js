import { ReceivablePaymentGroupLine } from '../models/ReceivablePaymentGroupLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReceivablePaymentGroupLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReceivablePaymentGroupLine', ReceivablePaymentGroupLine); 
    }
}
