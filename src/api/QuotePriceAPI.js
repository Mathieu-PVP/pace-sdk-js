import { QuotePrice } from '../models/QuotePrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuotePriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuotePrice', QuotePrice); 
    }
}
