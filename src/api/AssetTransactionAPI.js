import { AssetTransaction } from '../models/AssetTransaction.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetTransactionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetTransaction', AssetTransaction); 
    }
}
