import { LotCycleCount } from '../models/LotCycleCount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LotCycleCountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'LotCycleCount', LotCycleCount); 
    }
}
