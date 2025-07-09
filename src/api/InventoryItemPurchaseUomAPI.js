import { InventoryItemPurchaseUom } from '../models/InventoryItemPurchaseUom.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemPurchaseUomAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemPurchaseUom', InventoryItemPurchaseUom); 
    }
}
