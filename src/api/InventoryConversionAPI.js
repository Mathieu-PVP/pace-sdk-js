import { InventoryConversion } from '../models/InventoryConversion.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryConversionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryConversion', InventoryConversion); 
    }
}
