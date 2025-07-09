import { EstimateRequestItem } from '../models/EstimateRequestItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestItem', EstimateRequestItem); 
    }
}
