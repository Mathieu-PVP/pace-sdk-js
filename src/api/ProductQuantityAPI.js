import { ProductQuantity } from '../models/ProductQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductQuantity', ProductQuantity); 
    }
}
