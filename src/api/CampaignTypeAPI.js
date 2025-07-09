import { CampaignType } from '../models/CampaignType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CampaignTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CampaignType', CampaignType); 
    }
}
