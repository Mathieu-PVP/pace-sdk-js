import { AssetTransactionBatch } from '../models/AssetTransactionBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetTransactionBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetTransactionBatch', AssetTransactionBatch); 
    }
}
