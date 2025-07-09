import { MetrixExportProfile } from '../models/MetrixExportProfile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetrixExportProfileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetrixExportProfile', MetrixExportProfile); 
    }
}
