import { JobArchive } from '../models/JobArchive.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobArchiveAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobArchive', JobArchive); 
    }
}
