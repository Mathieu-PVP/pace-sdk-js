import { PayrollDeductionType } from '../models/PayrollDeductionType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollDeductionTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollDeductionType', PayrollDeductionType); 
    }
}
