import { QuoteItemTypePrintService } from '../models/QuoteItemTypePrintService.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteItemTypePrintServiceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteItemTypePrintService', QuoteItemTypePrintService); 
    }
}
