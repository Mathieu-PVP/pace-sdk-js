import { JobPartMail } from '../models/JobPartMail.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartMailAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartMail', JobPartMail); 
    }
}
