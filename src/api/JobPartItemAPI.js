import { JobPartItem } from '../models/JobPartItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartItem', JobPartItem); 
    }
}
