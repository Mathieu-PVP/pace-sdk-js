import { QuoteQuantity } from '../models/QuoteQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteQuantity', QuoteQuantity); 
    }
}
