import { PurchaseOrderType } from '../models/PurchaseOrderType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PurchaseOrderTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PurchaseOrderType', PurchaseOrderType); 
    }
}
