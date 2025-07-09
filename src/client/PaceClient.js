import { HttpClient } from '../core/httpClient.js';
import { CompanyAPI } from '../api/CompanyAPI.js';
import { CustomerAPI } from '../api/CustomerAPI.js';
import { EstimateAPI } from '../api/EstimateAPI.js';
import { JobAPI } from '../api/JobAPI.js';
import { JobPlanAPI } from '../api/JobPlanAPI.js';
import { PressAPI } from '../api/PressAPI.js';

export class PaceClient {
    constructor({ username, password, baseUrl }) {
        const client = new HttpClient({ baseUrl, username, password });
        this.companies = new CompanyAPI(client);
        this.customers = new CustomerAPI(client);
        this.estimates = new EstimateAPI(client);
        this.jobs = new JobAPI(client);
        this.jobplans = new JobPlanAPI(client);
        this.presses = new PressAPI(client);
    }
} 
