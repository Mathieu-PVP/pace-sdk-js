import { PayrollBatch } from '../models/PayrollBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollBatch', PayrollBatch); 
    }
}
