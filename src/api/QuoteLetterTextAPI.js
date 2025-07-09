import { QuoteLetterText } from '../models/QuoteLetterText.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteLetterTextAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteLetterText', QuoteLetterText); 
    }
}
