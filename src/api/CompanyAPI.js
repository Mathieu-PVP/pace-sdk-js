import { Company } from '../models/Company.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CompanyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Company', Company); 
    }
}
