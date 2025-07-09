import { CertificationLevel } from '../models/CertificationLevel.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CertificationLevelAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CertificationLevel', CertificationLevel); 
    }
}
