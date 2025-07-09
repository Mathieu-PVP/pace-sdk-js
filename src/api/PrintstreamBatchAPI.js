import { PrintstreamBatch } from '../models/PrintstreamBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintstreamBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintstreamBatch', PrintstreamBatch); 
    }
}
