import { JobStatusReason } from '../models/JobStatusReason.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobStatusReasonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobStatusReason', JobStatusReason); 
    }
}
