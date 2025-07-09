import { PurchaseOrderLineShipTo } from '../models/PurchaseOrderLineShipTo.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchaseOrderLineShipToAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchaseOrderLineShipTo', PurchaseOrderLineShipTo); 
    }
}
