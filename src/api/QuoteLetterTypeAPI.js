import { QuoteLetterType } from '../models/QuoteLetterType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteLetterTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteLetterType', QuoteLetterType); 
    }
}
