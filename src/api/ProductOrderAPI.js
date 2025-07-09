import { ProductOrder } from '../models/ProductOrder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductOrderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductOrder', ProductOrder); 
    }
}
