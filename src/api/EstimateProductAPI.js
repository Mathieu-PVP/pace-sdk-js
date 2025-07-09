import { EstimateProduct } from '../models/EstimateProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateProduct', EstimateProduct); 
    }
}
