import { EstimateRequestComponent } from '../models/EstimateRequestComponent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestComponentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestComponent', EstimateRequestComponent); 
    }
}
