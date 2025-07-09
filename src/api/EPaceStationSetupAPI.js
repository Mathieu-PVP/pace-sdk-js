import { EPaceStationSetup } from '../models/EPaceStationSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EPaceStationSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EPaceStationSetup', EPaceStationSetup); 
    }
}
