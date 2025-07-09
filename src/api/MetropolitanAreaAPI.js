import { MetropolitanArea } from '../models/MetropolitanArea.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetropolitanAreaAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetropolitanArea', MetropolitanArea); 
    }
}
