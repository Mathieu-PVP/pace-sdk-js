import { PaceConnectResult } from '../models/PaceConnectResult.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectResultAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectResult', PaceConnectResult); 
    }
}
