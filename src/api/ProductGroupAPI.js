import { ProductGroup } from '../models/ProductGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductGroup', ProductGroup); 
    }
}
