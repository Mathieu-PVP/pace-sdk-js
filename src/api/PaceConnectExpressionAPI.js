import { PaceConnectExpression } from '../models/PaceConnectExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectExpression', PaceConnectExpression); 
    }
}
