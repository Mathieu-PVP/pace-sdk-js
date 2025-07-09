import { I18nBundle } from '../models/I18nBundle.js';
import { AbstractAPI } from './AbstractAPI.js';

export class I18nBundleAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'I18nBundle', I18nBundle); 
    }
}
