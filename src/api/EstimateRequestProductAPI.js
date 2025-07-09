import { EstimateRequestProduct } from '../models/EstimateRequestProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestProduct', EstimateRequestProduct); 
    }
}
