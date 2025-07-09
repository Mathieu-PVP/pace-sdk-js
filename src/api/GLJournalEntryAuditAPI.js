import { GLJournalEntryAudit } from '../models/GLJournalEntryAudit.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLJournalEntryAuditAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLJournalEntryAudit', GLJournalEntryAudit); 
    }
}
