import { EstimateRequestNote } from '../models/EstimateRequestNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestNote', EstimateRequestNote); 
    }
}
