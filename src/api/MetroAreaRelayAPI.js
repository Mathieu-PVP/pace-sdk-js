import { MetroAreaRelay } from '../models/MetroAreaRelay.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetroAreaRelayAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetroAreaRelay', MetroAreaRelay); 
    }
}
