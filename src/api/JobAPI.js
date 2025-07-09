import { Job } from '../models/Job.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobAPI extends AbstractAPI {
    constructor(client) {
        super(client, 'Job', Job);
    }
}