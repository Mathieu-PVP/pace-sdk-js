import { PaceConnectPendingFile } from '../models/PaceConnectPendingFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectPendingFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectPendingFile', PaceConnectPendingFile); 
    }
}
