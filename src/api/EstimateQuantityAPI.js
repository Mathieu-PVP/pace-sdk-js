import { EstimateQuantity } from '../models/EstimateQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuantity', EstimateQuantity); 
    }
}
