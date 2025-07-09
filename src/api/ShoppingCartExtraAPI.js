import { ShoppingCartExtra } from '../models/ShoppingCartExtra.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShoppingCartExtraAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShoppingCartExtra', ShoppingCartExtra); 
    }
}
