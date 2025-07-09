import { EstimateRequestSetup } from '../models/EstimateRequestSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestSetup', EstimateRequestSetup); 
    }
}
