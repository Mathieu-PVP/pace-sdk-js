import { AutoInvoiceLine } from '../models/AutoInvoiceLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AutoInvoiceLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AutoInvoiceLine', AutoInvoiceLine); 
    }
}
