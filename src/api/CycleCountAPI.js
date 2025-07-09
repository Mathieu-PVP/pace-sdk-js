import { CycleCount } from '../models/CycleCount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CycleCountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CycleCount', CycleCount); 
    }
}
