import { QuoteProduct } from '../models/QuoteProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteProduct', QuoteProduct); 
    }
}
