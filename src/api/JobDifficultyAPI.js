import { JobDifficulty } from '../models/JobDifficulty.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobDifficultyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobDifficulty', JobDifficulty); 
    }
}
