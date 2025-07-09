import { InvoiceSalesDist } from '../models/InvoiceSalesDist.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InvoiceSalesDistAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InvoiceSalesDist', InvoiceSalesDist); 
    }
}
