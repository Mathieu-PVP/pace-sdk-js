import { InventorySetup } from '../models/InventorySetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventorySetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventorySetup', InventorySetup); 
    }
}
