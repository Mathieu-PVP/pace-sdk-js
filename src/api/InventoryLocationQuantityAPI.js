import { InventoryLocationQuantity } from '../models/InventoryLocationQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryLocationQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryLocationQuantity', InventoryLocationQuantity); 
    }
}
