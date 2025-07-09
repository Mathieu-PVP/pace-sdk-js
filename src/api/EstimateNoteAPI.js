import { EstimateNote } from '../models/EstimateNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateNote', EstimateNote); 
    }
}
