import { InventoryBin } from '../models/InventoryBin.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryBinAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryBin', InventoryBin); 
    }
}
