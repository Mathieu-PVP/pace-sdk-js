import { Opportunity } from '../models/Opportunity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OpportunityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Opportunity', Opportunity); 
    }
}
