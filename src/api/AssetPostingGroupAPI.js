import { AssetPostingGroup } from '../models/AssetPostingGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AssetPostingGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AssetPostingGroup', AssetPostingGroup); 
    }
}
