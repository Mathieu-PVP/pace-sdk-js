import { JobNote } from '../models/JobNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobNote', JobNote); 
    }
}
