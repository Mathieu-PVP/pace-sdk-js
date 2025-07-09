import { PurchaseOrderReceipt } from '../models/PurchaseOrderReceipt.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchaseOrderReceiptAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchaseOrderReceipt', PurchaseOrderReceipt); 
    }
}
