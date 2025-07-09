import { JobBillingAccountingCode } from '../models/JobBillingAccountingCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobBillingAccountingCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobBillingAccountingCode', JobBillingAccountingCode); 
    }
}
