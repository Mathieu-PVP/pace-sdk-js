import { InventoryLocation } from '../models/InventoryLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryLocation', InventoryLocation); 
    }
}
