import { EstimateRequestPart } from '../models/EstimateRequestPart.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestPartAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestPart', EstimateRequestPart); 
    }
}
