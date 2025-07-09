import { ProductPrice } from '../models/ProductPrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductPriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductPrice', ProductPrice); 
    }
}
