import { ShoppingCart } from '../models/ShoppingCart.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShoppingCartAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShoppingCart', ShoppingCart); 
    }
}
