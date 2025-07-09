import { ContactNote } from '../models/ContactNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ContactNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ContactNote', ContactNote); 
    }
}
