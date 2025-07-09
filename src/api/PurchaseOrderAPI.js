import { PurchaseOrder } from '../models/PurchaseOrder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchaseOrderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchaseOrder', PurchaseOrder); 
    }
}
