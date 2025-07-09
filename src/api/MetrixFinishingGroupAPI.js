import { MetrixFinishingGroup } from '../models/MetrixFinishingGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetrixFinishingGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetrixFinishingGroup', MetrixFinishingGroup); 
    }
}
