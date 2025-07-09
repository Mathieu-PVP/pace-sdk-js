import { AllowanceExpression } from '../models/AllowanceExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AllowanceExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AllowanceExpression', AllowanceExpression); 
    }
}
