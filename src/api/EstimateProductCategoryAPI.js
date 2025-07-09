import { EstimateProductCategory } from '../models/EstimateProductCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateProductCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateProductCategory', EstimateProductCategory); 
    }
}
