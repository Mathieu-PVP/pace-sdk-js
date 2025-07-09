import { PaceConnectMapConfigEntry } from '../models/PaceConnectMapConfigEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectMapConfigEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectMapConfigEntry', PaceConnectMapConfigEntry); 
    }
}
