import { InventoryBatch } from '../models/InventoryBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryBatch', InventoryBatch); 
    }
}
