import { InventoryConversionTarget } from '../models/InventoryConversionTarget.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryConversionTargetAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryConversionTarget', InventoryConversionTarget); 
    }
}
