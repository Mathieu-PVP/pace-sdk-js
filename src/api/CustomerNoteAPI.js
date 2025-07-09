import { CustomerNote } from '../models/CustomerNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerNote', CustomerNote); 
    }
}
