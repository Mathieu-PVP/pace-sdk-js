import { EstimateLayout } from '../models/EstimateLayout.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateLayoutAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateLayout', EstimateLayout); 
    }
}
