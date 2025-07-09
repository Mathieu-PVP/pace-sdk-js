import { QuoteProductContentFile } from '../models/QuoteProductContentFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteProductContentFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteProductContentFile', QuoteProductContentFile); 
    }
}
