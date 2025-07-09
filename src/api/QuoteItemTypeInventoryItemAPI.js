import { QuoteItemTypeInventoryItem } from '../models/QuoteItemTypeInventoryItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemTypeInventoryItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemTypeInventoryItem', QuoteItemTypeInventoryItem); 
    }
}
