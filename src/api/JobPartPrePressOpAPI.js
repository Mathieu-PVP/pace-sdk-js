import { JobPartPrePressOp } from '../models/JobPartPrePressOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPrePressOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPrePressOp', JobPartPrePressOp); 
    }
}
