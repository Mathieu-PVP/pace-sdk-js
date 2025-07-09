import { JobPartOutsidePurch } from '../models/JobPartOutsidePurch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartOutsidePurchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartOutsidePurch', JobPartOutsidePurch); 
    }
}
