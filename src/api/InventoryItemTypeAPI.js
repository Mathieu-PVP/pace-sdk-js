import { InventoryItemType } from '../models/InventoryItemType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemType', InventoryItemType); 
    }
}
