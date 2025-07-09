import { PaceConnectFile } from '../models/PaceConnectFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectFile', PaceConnectFile); 
    }
}
