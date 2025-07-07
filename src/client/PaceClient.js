import { HttpClient } from '../core/httpClient.js';
import { JobAPI } from '../api/JobAPI.js';
import { PressAPI } from '../api/PressAPI.js';

export class PaceClient {
    constructor({ username, password, baseUrl }) {
        const client = new HttpClient({ baseUrl, username, password });
        this.jobs = new JobAPI(client);
        this.presses = new PressAPI(client);
    }
} 
