import { EstimateSetup } from '../models/EstimateSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateSetup', EstimateSetup); 
    }
}
