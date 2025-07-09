import { PaceConnectMapConfig } from '../models/PaceConnectMapConfig.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectMapConfigAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectMapConfig', PaceConnectMapConfig); 
    }
}
