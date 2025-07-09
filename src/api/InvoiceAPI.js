import { Invoice } from '../models/Invoice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Invoice', Invoice); 
    }
}
