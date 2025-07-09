import { PaceConnectSync } from '../models/PaceConnectSync.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectSyncAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectSync', PaceConnectSync); 
    }
}
