import { InvoiceExtraType } from '../models/InvoiceExtraType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceExtraTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceExtraType', InvoiceExtraType); 
    }
}
