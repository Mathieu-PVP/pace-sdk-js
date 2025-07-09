import { PaceConnectMap } from '../models/PaceConnectMap.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectMapAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectMap', PaceConnectMap); 
    }
}
