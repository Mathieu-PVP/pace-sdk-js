import { Organization } from '../models/Organization.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OrganizationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Organization', Organization); 
    }
}
