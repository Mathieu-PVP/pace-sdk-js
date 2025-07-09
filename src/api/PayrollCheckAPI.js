import { PayrollCheck } from '../models/PayrollCheck.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollCheckAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollCheck', PayrollCheck); 
    }
}
