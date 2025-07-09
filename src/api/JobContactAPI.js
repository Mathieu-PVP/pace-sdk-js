import { JobContact } from '../models/JobContact.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobContactAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobContact', JobContact); 
    }
}
