import { QuoteNote } from '../models/QuoteNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteNote', QuoteNote); 
    }
}
