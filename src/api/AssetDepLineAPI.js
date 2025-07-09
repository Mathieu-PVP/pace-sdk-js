import { AssetDepLine } from '../models/AssetDepLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetDepLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetDepLine', AssetDepLine); 
    }
}
