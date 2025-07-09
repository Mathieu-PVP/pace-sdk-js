import { GLAccountBalanceSummary } from '../models/GLAccountBalanceSummary.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountBalanceSummaryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccountBalanceSummary', GLAccountBalanceSummary); 
    }
}
