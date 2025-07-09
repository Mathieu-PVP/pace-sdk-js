import { JobPartFinishingOp } from '../models/JobPartFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartFinishingOp', JobPartFinishingOp); 
    }
}
