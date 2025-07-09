import { InvoiceTaxDist } from '../models/InvoiceTaxDist.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceTaxDistAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceTaxDist', InvoiceTaxDist); 
    }
}
