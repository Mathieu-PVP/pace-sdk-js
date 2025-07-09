import { PaceConnectExternalExpression } from '../models/PaceConnectExternalExpression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectExternalExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectExternalExpression', PaceConnectExternalExpression); 
    }
}
