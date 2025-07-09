import { CertificationProductClassification } from '../models/CertificationProductClassification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CertificationProductClassificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CertificationProductClassification', CertificationProductClassification); 
    }
}
