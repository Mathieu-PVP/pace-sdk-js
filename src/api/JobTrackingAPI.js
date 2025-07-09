import { JobTracking } from '../models/JobTracking.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobTrackingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobTracking', JobTracking); 
    }
}
