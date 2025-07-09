import { QuoteLetter } from '../models/QuoteLetter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteLetterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteLetter', QuoteLetter); 
    }
}
