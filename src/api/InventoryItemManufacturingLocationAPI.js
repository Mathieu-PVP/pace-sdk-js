import { InventoryItemManufacturingLocation } from '../models/InventoryItemManufacturingLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemManufacturingLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemManufacturingLocation', InventoryItemManufacturingLocation); 
    }
}
