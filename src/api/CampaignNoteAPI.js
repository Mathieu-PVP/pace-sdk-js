import { CampaignNote } from '../models/CampaignNote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CampaignNoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CampaignNote', CampaignNote); 
    }
}
