import { JobControlSetup } from '../models/JobControlSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobControlSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobControlSetup', JobControlSetup); 
    }
}
