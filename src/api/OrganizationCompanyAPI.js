import { OrganizationCompany } from '../models/OrganizationCompany.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OrganizationCompanyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OrganizationCompany', OrganizationCompany); 
    }
}
