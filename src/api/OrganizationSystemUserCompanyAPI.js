import { OrganizationSystemUserCompany } from '../models/OrganizationSystemUserCompany.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OrganizationSystemUserCompanyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OrganizationSystemUserCompany', OrganizationSystemUserCompany); 
    }
}
