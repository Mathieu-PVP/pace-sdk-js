import { GLAccountingPeriod } from '../models/GLAccountingPeriod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountingPeriodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccountingPeriod', GLAccountingPeriod); 
    }
}
