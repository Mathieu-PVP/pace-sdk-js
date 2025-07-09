import { Priority } from '../models/Priority.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PriorityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Priority', Priority); 
    }
}
