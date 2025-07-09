import { EstimateExpression } from '../models/EstimateExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateExpression', EstimateExpression); 
    }
}
