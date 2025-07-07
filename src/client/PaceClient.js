import { HttpClient } from '../core/httpClient.js';
import { EstimateAPI } from '../api/EstimateAPI.js';
import { CompanyAPI } from '../api/CompanyAPI.js';
import { JobAPI } from '../api/JobAPI.js';
import { PressAPI } from '../api/PressAPI.js';

export class PaceClient {
    constructor({ username, password, baseUrl }) {
        const client = new HttpClient({ baseUrl, username, password });
        this.estimates = new EstimateAPI(client);
        this.companies = new CompanyAPI(client);
        this.jobs = new JobAPI(client);
        this.presses = new PressAPI(client);
    }
} 
