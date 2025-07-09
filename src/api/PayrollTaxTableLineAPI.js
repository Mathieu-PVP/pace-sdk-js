import { PayrollTaxTableLine } from '../models/PayrollTaxTableLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollTaxTableLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollTaxTableLine', PayrollTaxTableLine); 
    }
}
