import { POStatus } from '../models/POStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class POStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'POStatus', POStatus); 
    }
}
