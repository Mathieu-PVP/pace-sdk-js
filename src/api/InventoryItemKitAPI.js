import { InventoryItemKit } from '../models/InventoryItemKit.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemKitAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemKit', InventoryItemKit); 
    }
}
