import { QuoteItemTypeActivityCode } from '../models/QuoteItemTypeActivityCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemTypeActivityCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemTypeActivityCode', QuoteItemTypeActivityCode); 
    }
}
