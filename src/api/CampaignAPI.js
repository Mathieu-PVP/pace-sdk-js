import { Campaign } from '../models/Campaign.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CampaignAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Campaign', Campaign); 
    }
}
