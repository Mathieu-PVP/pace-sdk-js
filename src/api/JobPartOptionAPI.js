import { JobPartOption } from '../models/JobPartOption.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartOptionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartOption', JobPartOption); 
    }
}
