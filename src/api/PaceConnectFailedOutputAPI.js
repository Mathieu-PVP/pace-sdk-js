import { PaceConnectFailedOutput } from '../models/PaceConnectFailedOutput.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectFailedOutputAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectFailedOutput', PaceConnectFailedOutput); 
    }
}
