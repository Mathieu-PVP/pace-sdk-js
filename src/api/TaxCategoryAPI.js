import { TaxCategory } from '../models/TaxCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxCategory', TaxCategory); 
    }
}
