import { CustomerShoppingCartExtra } from '../models/CustomerShoppingCartExtra.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerShoppingCartExtraAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerShoppingCartExtra', CustomerShoppingCartExtra); 
    }
}
