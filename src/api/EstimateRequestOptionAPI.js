import { EstimateRequestOption } from '../models/EstimateRequestOption.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestOptionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestOption', EstimateRequestOption); 
    }
}
