import { QuoteLetterTypeText } from '../models/QuoteLetterTypeText.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteLetterTypeTextAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteLetterTypeText', QuoteLetterTypeText); 
    }
}
