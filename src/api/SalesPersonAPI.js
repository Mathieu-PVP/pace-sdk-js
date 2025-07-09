import { SalesPerson } from '../models/SalesPerson.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalesPersonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SalesPerson', SalesPerson); 
    }
}
