import { EstimateActivity } from '../models/EstimateActivity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateActivityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateActivity', EstimateActivity); 
    }
}
