import { OpportunityType } from '../models/OpportunityType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OpportunityTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OpportunityType', OpportunityType); 
    }
}
