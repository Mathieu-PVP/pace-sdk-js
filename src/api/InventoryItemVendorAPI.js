import { InventoryItemVendor } from '../models/InventoryItemVendor.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemVendorAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemVendor', InventoryItemVendor); 
    }
}
