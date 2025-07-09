import { EstimateQuoteLetterNotePrice } from '../models/EstimateQuoteLetterNotePrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuoteLetterNotePriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuoteLetterNotePrice', EstimateQuoteLetterNotePrice); 
    }
}
