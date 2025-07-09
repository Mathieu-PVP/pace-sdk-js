import { CertificationTraining } from '../models/CertificationTraining.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CertificationTrainingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CertificationTraining', CertificationTraining); 
    }
}
