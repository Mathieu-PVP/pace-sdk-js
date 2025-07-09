import { QuoteExpression } from '../models/QuoteExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteExpression', QuoteExpression); 
    }
}
