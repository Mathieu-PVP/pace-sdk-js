import { QuoteLetterNote } from '../models/QuoteLetterNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteLetterNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteLetterNote', QuoteLetterNote); 
    }
}
