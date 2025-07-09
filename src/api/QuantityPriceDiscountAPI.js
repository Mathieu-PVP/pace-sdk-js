import { QuantityPriceDiscount } from '../models/QuantityPriceDiscount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuantityPriceDiscountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuantityPriceDiscount', QuantityPriceDiscount); 
    }
}
