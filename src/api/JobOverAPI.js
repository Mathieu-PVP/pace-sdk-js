import { JobOver } from '../models/JobOver.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobOverAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobOver', JobOver); 
    }
}
