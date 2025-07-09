import { EstimateIntentInfo } from '../models/EstimateIntentInfo.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateIntentInfoAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateIntentInfo', EstimateIntentInfo); 
    }
}
