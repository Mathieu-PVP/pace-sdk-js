import { NetworkLocation } from '../models/NetworkLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NetworkLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NetworkLocation', NetworkLocation); 
    }
}
