import { RelatedInventoryItems } from '../models/RelatedInventoryItems.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RelatedInventoryItemsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RelatedInventoryItems', RelatedInventoryItems); 
    }
}
