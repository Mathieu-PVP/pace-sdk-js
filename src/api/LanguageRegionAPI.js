import { LanguageRegion } from '../models/LanguageRegion.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LanguageRegionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'LanguageRegion', LanguageRegion); 
    }
}
