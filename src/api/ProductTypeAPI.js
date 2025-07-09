import { ProductType } from '../models/ProductType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductType', ProductType); 
    }
}
