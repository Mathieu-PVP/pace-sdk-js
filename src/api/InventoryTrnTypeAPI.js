import { InventoryTrnType } from '../models/InventoryTrnType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryTrnTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryTrnType', InventoryTrnType); 
    }
}
