import { InventoryItemVendorCost } from '../models/InventoryItemVendorCost.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemVendorCostAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemVendorCost', InventoryItemVendorCost); 
    }
}
