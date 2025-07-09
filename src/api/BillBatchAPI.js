import { BillBatch } from '../models/BillBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillBatch', BillBatch); 
    }
}
