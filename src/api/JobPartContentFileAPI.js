import { JobPartContentFile } from '../models/JobPartContentFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartContentFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartContentFile', JobPartContentFile); 
    }
}
