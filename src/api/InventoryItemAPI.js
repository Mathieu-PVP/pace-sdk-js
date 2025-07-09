import { InventoryItem } from '../models/InventoryItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItem', InventoryItem); 
    }
}
