import { Department } from '../models/Department.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DepartmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Department', Department); 
    }
}
