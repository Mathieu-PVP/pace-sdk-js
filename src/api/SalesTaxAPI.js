import { SalesTax } from '../models/SalesTax.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalesTaxAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SalesTax', SalesTax); 
    }
}
