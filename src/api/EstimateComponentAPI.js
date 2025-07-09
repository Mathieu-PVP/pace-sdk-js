import { EstimateComponent } from '../models/EstimateComponent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateComponentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateComponent', EstimateComponent); 
    }
}
