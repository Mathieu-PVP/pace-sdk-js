import { QuoteItemPrice } from '../models/QuoteItemPrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemPriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemPrice', QuoteItemPrice); 
    }
}
