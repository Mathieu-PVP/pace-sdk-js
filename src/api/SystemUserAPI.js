import { SystemUser } from '../models/SystemUser.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SystemUserAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SystemUser', SystemUser); 
    }
}
