import { JobDiscount } from '../models/JobDiscount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobDiscountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobDiscount', JobDiscount); 
    }
}
