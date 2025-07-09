import { FixedAssetNote } from '../models/FixedAssetNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FixedAssetNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FixedAssetNote', FixedAssetNote); 
    }
}
