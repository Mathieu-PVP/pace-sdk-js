import { InvoiceExtra } from '../models/InvoiceExtra.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceExtraAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceExtra', InvoiceExtra); 
    }
}
