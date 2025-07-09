import { QuoteDepartment } from '../models/QuoteDepartment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteDepartmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteDepartment', QuoteDepartment); 
    }
}
