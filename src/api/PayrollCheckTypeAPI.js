import { PayrollCheckType } from '../models/PayrollCheckType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollCheckTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollCheckType', PayrollCheckType); 
    }
}
