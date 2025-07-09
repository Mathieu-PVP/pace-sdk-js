import { JobPartImpositionAllowance } from '../models/JobPartImpositionAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartImpositionAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartImpositionAllowance', JobPartImpositionAllowance); 
    }
}
