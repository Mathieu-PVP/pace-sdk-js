import { BankAccountLine } from '../models/BankAccountLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BankAccountLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BankAccountLine', BankAccountLine); 
    }
}
