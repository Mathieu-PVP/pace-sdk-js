import { EstimateQuoteLetter } from '../models/EstimateQuoteLetter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuoteLetterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuoteLetter', EstimateQuoteLetter); 
    }
}
