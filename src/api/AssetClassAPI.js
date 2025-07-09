import { AssetClass } from '../models/AssetClass.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetClassAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetClass', AssetClass); 
    }
}
