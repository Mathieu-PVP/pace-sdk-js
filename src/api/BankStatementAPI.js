import { BankStatement } from '../models/BankStatement.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BankStatementAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BankStatement', BankStatement); 
    }
}
