import { InvoiceBatch } from '../models/InvoiceBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceBatch', InvoiceBatch); 
    }
}
