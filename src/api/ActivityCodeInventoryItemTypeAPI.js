import { ActivityCodeInventoryItemType } from '../models/ActivityCodeInventoryItemType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityCodeInventoryItemTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityCodeInventoryItemType', ActivityCodeInventoryItemType); 
    }
}
