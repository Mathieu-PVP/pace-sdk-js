import { CostCategory } from '../models/CostCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CostCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CostCategory', CostCategory); 
    }
}
