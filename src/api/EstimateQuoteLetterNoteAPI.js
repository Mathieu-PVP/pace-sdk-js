import { EstimateQuoteLetterNote } from '../models/EstimateQuoteLetterNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuoteLetterNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuoteLetterNote', EstimateQuoteLetterNote); 
    }
}
