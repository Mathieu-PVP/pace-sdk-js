import { JobReorder } from '../models/JobReorder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobReorderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobReorder', JobReorder); 
    }
}
