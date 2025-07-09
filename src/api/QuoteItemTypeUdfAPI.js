import { QuoteItemTypeUdf } from '../models/QuoteItemTypeUdf.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemTypeUdfAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemTypeUdf', QuoteItemTypeUdf); 
    }
}
