import { JobType } from '../models/JobType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobType', JobType); 
    }
}
