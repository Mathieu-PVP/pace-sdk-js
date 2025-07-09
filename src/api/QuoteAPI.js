import { Quote } from '../models/Quote.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Quote', Quote); 
    }
}
