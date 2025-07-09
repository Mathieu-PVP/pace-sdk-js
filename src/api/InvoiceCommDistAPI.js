import { InvoiceCommDist } from '../models/InvoiceCommDist.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceCommDistAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceCommDist', InvoiceCommDist); 
    }
}
