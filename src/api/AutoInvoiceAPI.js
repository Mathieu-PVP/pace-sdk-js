import { AutoInvoice } from '../models/AutoInvoice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AutoInvoiceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AutoInvoice', AutoInvoice); 
    }
}
