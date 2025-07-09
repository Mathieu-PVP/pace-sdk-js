import { GLDepartment } from '../models/GLDepartment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLDepartmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLDepartment', GLDepartment); 
    }
}
