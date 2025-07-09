import { CustomerCalculate } from '../models/CustomerCalculate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerCalculateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerCalculate', CustomerCalculate); 
    }
}
