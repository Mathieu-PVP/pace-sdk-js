import { InvoiceType } from '../models/InvoiceType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceType', InvoiceType); 
    }
}
