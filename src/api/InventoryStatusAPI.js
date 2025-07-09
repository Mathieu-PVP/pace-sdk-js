import { InventoryStatus } from '../models/InventoryStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryStatus', InventoryStatus); 
    }
}
