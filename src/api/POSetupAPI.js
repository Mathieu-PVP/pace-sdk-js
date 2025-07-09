import { POSetup } from '../models/POSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class POSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'POSetup', POSetup); 
    }
}
