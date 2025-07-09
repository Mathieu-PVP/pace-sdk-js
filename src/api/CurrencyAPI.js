import { Currency } from '../models/Currency.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CurrencyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Currency', Currency); 
    }
}
