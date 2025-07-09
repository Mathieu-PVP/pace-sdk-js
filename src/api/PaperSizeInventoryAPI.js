import { PaperSizeInventory } from '../models/PaperSizeInventory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperSizeInventoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperSizeInventory', PaperSizeInventory); 
    }
}
