import { QuoteItemType } from '../models/QuoteItemType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemType', QuoteItemType); 
    }
}
