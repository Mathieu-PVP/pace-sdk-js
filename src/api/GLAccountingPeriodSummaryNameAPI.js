import { GLAccountingPeriodSummaryName } from '../models/GLAccountingPeriodSummaryName.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountingPeriodSummaryNameAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccountingPeriodSummaryName', GLAccountingPeriodSummaryName); 
    }
}
