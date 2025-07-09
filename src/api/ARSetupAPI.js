import { ARSetup } from '../models/ARSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ARSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ARSetup', ARSetup); 
    }
}
