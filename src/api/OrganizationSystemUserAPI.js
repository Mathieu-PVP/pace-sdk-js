import { OrganizationSystemUser } from '../models/OrganizationSystemUser.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OrganizationSystemUserAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OrganizationSystemUser', OrganizationSystemUser); 
    }
}
