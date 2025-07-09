import { EmployeeNote } from '../models/EmployeeNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeNote', EmployeeNote); 
    }
}
