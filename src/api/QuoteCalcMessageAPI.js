import { QuoteCalcMessage } from '../models/QuoteCalcMessage.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteCalcMessageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteCalcMessage', QuoteCalcMessage); 
    }
}
