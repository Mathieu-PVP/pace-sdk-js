import { JobProject } from '../models/JobProject.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobProjectAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobProject', JobProject); 
    }
}
