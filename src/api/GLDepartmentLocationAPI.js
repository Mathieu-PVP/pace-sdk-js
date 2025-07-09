import { GLDepartmentLocation } from '../models/GLDepartmentLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLDepartmentLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLDepartmentLocation', GLDepartmentLocation); 
    }
}
