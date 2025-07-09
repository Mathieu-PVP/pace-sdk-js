import { WorkstationInventoryItem } from '../models/WorkstationInventoryItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationInventoryItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WorkstationInventoryItem', WorkstationInventoryItem); 
    }
}
