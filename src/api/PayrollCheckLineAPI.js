import { PayrollCheckLine } from '../models/PayrollCheckLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollCheckLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollCheckLine', PayrollCheckLine); 
    }
}
