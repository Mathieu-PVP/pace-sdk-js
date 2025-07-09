import { EmployeeCountType } from '../models/EmployeeCountType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeCountTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeCountType', EmployeeCountType); 
    }
}
