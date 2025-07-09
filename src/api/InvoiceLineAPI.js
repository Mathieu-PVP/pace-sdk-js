import { InvoiceLine } from '../models/InvoiceLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceLine', InvoiceLine); 
    }
}
