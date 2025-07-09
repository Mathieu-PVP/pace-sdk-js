import { CertificationAuthority } from '../models/CertificationAuthority.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CertificationAuthorityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CertificationAuthority', CertificationAuthority); 
    }
}
