import { EstimateOutsidePurch } from '../models/EstimateOutsidePurch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateOutsidePurchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateOutsidePurch', EstimateOutsidePurch); 
    }
}
