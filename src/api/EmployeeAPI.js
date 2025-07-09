import { Employee } from '../models/Employee.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Employee', Employee); 
    }
}
