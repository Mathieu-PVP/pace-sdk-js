import { FASetup } from '../models/FASetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FASetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FASetup', FASetup); 
    }
}
