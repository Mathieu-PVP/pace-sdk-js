import { PaceConnect } from '../models/PaceConnect.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnect', PaceConnect); 
    }
}
