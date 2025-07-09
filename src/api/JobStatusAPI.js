import { JobStatus } from '../models/JobStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobStatus', JobStatus); 
    }
}
