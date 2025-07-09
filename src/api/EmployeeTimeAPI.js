import { EmployeeTime } from '../models/EmployeeTime.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeTimeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeTime', EmployeeTime); 
    }
}
