import { PaceConnectSizeMap } from '../models/PaceConnectSizeMap.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectSizeMapAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectSizeMap', PaceConnectSizeMap); 
    }
}
