import { TermsDiscount } from '../models/TermsDiscount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TermsDiscountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TermsDiscount', TermsDiscount); 
    }
}
