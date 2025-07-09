import { PurchaseOrderLine } from '../models/PurchaseOrderLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchaseOrderLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchaseOrderLine', PurchaseOrderLine); 
    }
}
