import { SalesCategoryTaxRate } from '../models/SalesCategoryTaxRate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalesCategoryTaxRateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SalesCategoryTaxRate', SalesCategoryTaxRate); 
    }
}
