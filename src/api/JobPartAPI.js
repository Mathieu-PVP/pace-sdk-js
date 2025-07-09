import { JobPart } from '../models/JobPart.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPart', JobPart); 
    }
}
