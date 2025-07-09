import { EstimateProductCategoryJobProductType } from '../models/EstimateProductCategoryJobProductType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateProductCategoryJobProductTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateProductCategoryJobProductType', EstimateProductCategoryJobProductType); 
    }
}
