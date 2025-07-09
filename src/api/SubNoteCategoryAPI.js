import { SubNoteCategory } from '../models/SubNoteCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SubNoteCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SubNoteCategory', SubNoteCategory); 
    }
}
