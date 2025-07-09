import { VendorNote } from '../models/VendorNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VendorNote', VendorNote); 
    }
}
