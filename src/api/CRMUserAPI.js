import { CRMUser } from '../models/CRMUser.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CRMUserAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CRMUser', CRMUser); 
    }
}
