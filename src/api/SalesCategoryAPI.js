import { SalesCategory } from '../models/SalesCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalesCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SalesCategory', SalesCategory); 
    }
}
