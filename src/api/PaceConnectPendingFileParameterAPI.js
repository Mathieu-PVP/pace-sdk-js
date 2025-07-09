import { PaceConnectPendingFileParameter } from '../models/PaceConnectPendingFileParameter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectPendingFileParameterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectPendingFileParameter', PaceConnectPendingFileParameter); 
    }
}
