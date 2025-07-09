import { EstimateCompositeProduct } from '../models/EstimateCompositeProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateCompositeProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateCompositeProduct', EstimateCompositeProduct); 
    }
}
