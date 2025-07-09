import { PaceConnectLocation } from '../models/PaceConnectLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectLocation', PaceConnectLocation); 
    }
}
