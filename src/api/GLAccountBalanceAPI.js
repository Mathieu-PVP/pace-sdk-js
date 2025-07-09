import { GLAccountBalance } from '../models/GLAccountBalance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountBalanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccountBalance', GLAccountBalance); 
    }
}
