import { InventoryBinQuantity } from '../models/InventoryBinQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryBinQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryBinQuantity', InventoryBinQuantity); 
    }
}
