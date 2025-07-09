import { InvoiceBodIDLink } from '../models/InvoiceBodIDLink.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceBodIDLinkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceBodIDLink', InvoiceBodIDLink); 
    }
}
