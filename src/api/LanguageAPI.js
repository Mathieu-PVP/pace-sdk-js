import { Language } from '../models/Language.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LanguageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Language', Language); 
    }
}
