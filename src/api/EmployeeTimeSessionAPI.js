import { EmployeeTimeSession } from '../models/EmployeeTimeSession.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeTimeSessionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeTimeSession', EmployeeTimeSession); 
    }
}
