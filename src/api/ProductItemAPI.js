import { ProductItem } from '../models/ProductItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductItem', ProductItem); 
    }
}
