import { EmployeeStatus } from '../models/EmployeeStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeStatus', EmployeeStatus); 
    }
}
