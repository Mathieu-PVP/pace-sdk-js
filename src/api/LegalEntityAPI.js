import { LegalEntity } from '../models/LegalEntity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LegalEntityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'LegalEntity', LegalEntity); 
    }
}
