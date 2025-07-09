import { BankAccount } from '../models/BankAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BankAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BankAccount', BankAccount); 
    }
}
