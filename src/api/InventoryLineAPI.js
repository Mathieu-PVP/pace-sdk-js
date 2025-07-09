import { InventoryLine } from '../models/InventoryLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryLine', InventoryLine); 
    }
}
