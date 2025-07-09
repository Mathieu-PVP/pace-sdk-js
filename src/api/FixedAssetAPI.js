import { FixedAsset } from '../models/FixedAsset.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FixedAssetAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FixedAsset', FixedAsset); 
    }
}
