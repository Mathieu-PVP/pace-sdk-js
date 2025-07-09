import { QuoteCategory } from '../models/QuoteCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteCategory', QuoteCategory); 
    }
}
