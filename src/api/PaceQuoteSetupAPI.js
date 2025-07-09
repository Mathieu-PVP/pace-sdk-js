import { PaceQuoteSetup } from '../models/PaceQuoteSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceQuoteSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceQuoteSetup', PaceQuoteSetup); 
    }
}
