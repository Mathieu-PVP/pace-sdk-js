import { Proof } from '../models/Proof.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProofAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Proof', Proof); 
    }
}
