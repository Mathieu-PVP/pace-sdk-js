import { AssetDepBatch } from '../models/AssetDepBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetDepBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetDepBatch', AssetDepBatch); 
    }
}
