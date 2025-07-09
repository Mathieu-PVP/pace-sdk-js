import { PayrollPayTypeExcludeDeduction } from '../models/PayrollPayTypeExcludeDeduction.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollPayTypeExcludeDeductionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollPayTypeExcludeDeduction', PayrollPayTypeExcludeDeduction); 
    }
}
