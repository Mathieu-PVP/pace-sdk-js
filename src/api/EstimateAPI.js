import { Estimate } from '../models/Estimate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Estimate', Estimate); 
    }
}
