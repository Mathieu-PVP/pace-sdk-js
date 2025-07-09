import { ReceivablePaymentGroup } from '../models/ReceivablePaymentGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReceivablePaymentGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReceivablePaymentGroup', ReceivablePaymentGroup); 
    }
}
