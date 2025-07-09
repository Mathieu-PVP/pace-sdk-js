import { Product } from '../models/Product.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Product', Product); 
    }
}
