import { GLJournalEntry } from '../models/GLJournalEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLJournalEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLJournalEntry', GLJournalEntry); 
    }
}
