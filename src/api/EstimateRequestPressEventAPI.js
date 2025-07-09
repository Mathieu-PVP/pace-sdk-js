import { EstimateRequestPressEvent } from '../models/EstimateRequestPressEvent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestPressEventAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestPressEvent', EstimateRequestPressEvent); 
    }
}
