import { PayrollTaxTable } from '../models/PayrollTaxTable.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollTaxTableAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollTaxTable', PayrollTaxTable); 
    }
}
