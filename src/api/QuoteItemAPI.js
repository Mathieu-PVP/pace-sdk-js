import { QuoteItem } from '../models/QuoteItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItem', QuoteItem); 
    }
}
