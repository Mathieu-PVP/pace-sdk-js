import { HowToDeDupe } from '../models/HowToDeDupe.js';
import { AbstractAPI } from './AbstractAPI.js';

export class HowToDeDupeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'HowToDeDupe', HowToDeDupe); 
    }
}
