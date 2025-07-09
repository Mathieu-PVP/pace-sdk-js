import { ProductExpression } from '../models/ProductExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductExpression', ProductExpression); 
    }
}
