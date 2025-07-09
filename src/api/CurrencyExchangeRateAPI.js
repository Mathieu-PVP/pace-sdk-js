import { CurrencyExchangeRate } from '../models/CurrencyExchangeRate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CurrencyExchangeRateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CurrencyExchangeRate', CurrencyExchangeRate); 
    }
}
