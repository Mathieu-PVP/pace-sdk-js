import { GLAccountBudget } from '../models/GLAccountBudget.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountBudgetAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccountBudget', GLAccountBudget); 
    }
}
