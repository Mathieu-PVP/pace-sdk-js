import { FreightLinkUPSEntry } from '../models/FreightLinkUPSEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FreightLinkUPSEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FreightLinkUPSEntry', FreightLinkUPSEntry); 
    }
}
