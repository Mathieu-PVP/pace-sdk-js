import { InvoiceSource } from '../models/InvoiceSource.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceSourceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceSource', InvoiceSource); 
    }
}
