import { CustomerGroupDiscount } from '../models/CustomerGroupDiscount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerGroupDiscountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerGroupDiscount', CustomerGroupDiscount); 
    }
}
