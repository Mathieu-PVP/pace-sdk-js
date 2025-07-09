import { PaceConnectEvent } from '../models/PaceConnectEvent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectEventAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectEvent', PaceConnectEvent); 
    }
}
