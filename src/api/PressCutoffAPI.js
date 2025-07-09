import { PressCutoff } from '../models/PressCutoff.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressCutoffAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressCutoff', PressCutoff); 
    }
}
