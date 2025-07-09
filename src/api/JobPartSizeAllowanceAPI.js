import { JobPartSizeAllowance } from '../models/JobPartSizeAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartSizeAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartSizeAllowance', JobPartSizeAllowance); 
    }
}
