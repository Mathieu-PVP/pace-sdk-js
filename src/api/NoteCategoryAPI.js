import { NoteCategory } from '../models/NoteCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NoteCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NoteCategory', NoteCategory); 
    }
}
